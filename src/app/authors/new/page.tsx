"use client"
import {AuthorWithoutId} from "@/types/author";
import {SubmitHandler, useForm} from "react-hook-form";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import apiRouter from "@/api/router";
import {useRouter} from "next/navigation";


export default function New(){
  const {register, formState: {errors}, handleSubmit} = useForm({
    defaultValues: {
      name: ''
    },
    mode: "all",
  })

  const router = useRouter();

  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: apiRouter.authors.createAuthor,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getAuthors'] })
      console.log('redirect!!')
      router.push('/authors')
    },
  })

  const onSubmit: SubmitHandler<AuthorWithoutId> = (data) => {
    createMutation.mutate(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input type="text" {...register("name")}/>
      <button type="submit">Create</button>
    </form>
  )
}