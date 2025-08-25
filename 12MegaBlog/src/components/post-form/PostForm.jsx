import React, { useCallback } from "react"; /*we uses useCallback  when we pass props to child because when we click on button javascript creates new function every time from react component while depencies are not changing component is identical as before but js always creates new function and the child gets always new function so it re-renders , so to avoid re-rendering by caching instance of function which is a prop to child is stored using memoizing concept Passing Functions to Memoized Children: As shown above, it's essential when passing a function to a child component wrapped in React.memo.
As a Hook Dependency: When a function is used inside another hook like useEffect, useMemo, or even another useCallback. If you don't wrap it, you can cause an infinite loop or cause the effect to run on every render     
Result: Now, when you click the "Parent Count" button, ParentComponent re-renders, but useCallback returns the same handleButtonClick function it created on the first render. React.memo in ChildComponent sees that its onButtonClick prop has not changed, so it skips re-rendering. You will no longer see "Child is re-rendering!" in the console.*/
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import appwriteService from "../../appwrite/config";
import { Button, Input, Select, RTE } from "../index";
import { useSelector } from "react-redux";

function PostForm({ post }) {
  const { register, handleSubmit, control, getValues, watch, setValue } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.active || "active",
      },
    });
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);



  
  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? appwriteService.uploadFile(data.image[0])
        : null;

      if (file) {
        appwriteService.deleteFile(post.featuredImage);
      }
      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,})

        if(dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
         
    }
    else{
        const file = await appwriteService.uploadFile(data.image[0]) // todo check is file available or not & explain why?
        if(file){
          const fileId = file.$id
          data.featuredImage = fileId
          const dbPost = await appwriteService.createPost({
            ...data,
            userId: userData.$id,

          })
          if(dbPost){
            navigate(`/post/${dbPost.$id}`)
          }
        }
    }
  };
      const slugTransform = useCallback((value) =>{
        if(value && typeof value === 'string'){
          const slug = value.toLowerCase().replace(/ /g, '-')
          setValue('slug',slug)
          return slug
        // return value
          // .trim()
          // .toLowerCase()
          // .replace(/^[a-zA-Z\d\s]+/g, '-')
          // .replace(/\s/g, '-')
        return ''
        }
      },[]) 

      React.useEffect(() =>{
        const subscription = watch((value, {name}) =>{
          if(name === 'title'){
            setValue('slug', slugTransform(value.title,
              {shouldValidate: true}
            ))
          }
        })
        
        return () =>{
          subscription.unsubscribe()  // memory optimazation to mitigate again & again calling
        }
      },[watch,slugTransform, setValue])
        
      return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
      <Input
      label="Title :"
      placeholder="Title"
      className="mb-4"
      {...register("title", {required: true})}
      />
      <Input 
      label="Slug :"
      placeholder="Slug"
      className="mb-4"
      {...register("slug", { required:true})}   
      onInput={(e) =>{
        setValue("slug", slugTransform(e.currentTarget.value),{
          shouldValidate: true
        });
      }}   
      />
      <RTE label="Content :" name="content"
      control={control} defaultValue={getValues("content")} />
      </div>
      
      <div className="w-1/3 px-2">
      <Input
      label="Featured Image :"
      type="file"
      className="mb-4"
      accept="image/png,
      image/jpg,
      image/jpeg,
      image/gif"
      {...register("image",{required: !post})} />

      {post && (
        <div className="w-full mb-4">
          <img
          src={appwriteService.
            getFilePreview(post.
              featuredImage) }
              alt={post.title}
              className="rounded-lg"
              />
              </div>
      )}
      <Select
      options={["active", "inactive"]}
      label="Status"
      className="mb-4"
      {...register("status", {required: true})}
      />
      <Button 
      type="submit"
      bgColor={post? "bg-green-500": undefined}
      className="w-full">
      {post ? "Update" : "Submit"}
      </Button>
      </div>
    </form>
  )
}
export default PostForm