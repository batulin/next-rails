"use client"
import {useMutation, useQuery} from "@tanstack/react-query";
import ApiRouter from "../../api/router";
import Link from "next/link";


export default function Home() {
  const {data, refetch} = useQuery({
    queryKey: ['getAuthors'],
    queryFn: ApiRouter.authors.getAuthors
  })

  const deleteMutation = useMutation({
    mutationFn: ApiRouter.authors.deleteAuthor,
    onSuccess: () => refetch()
  })
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ul>
          {data?.map(author => (
            <li key={author.id}>
              <Link href={`/authors/${author.id}`}>{author.name}</Link>
              <button onClick={() => deleteMutation.mutate(author)}>delete</button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
