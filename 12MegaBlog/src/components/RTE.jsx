import React from "react";
import {Editor} from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'


export default function RTE({name,control,label, defaultValue=""}){ // control converts this RTE components into form & changes state,  we pass this control when we want to use RTE & we get constrol from react hook form
    
    return(
        <div className="w-full">
            {label && <label className="inline-block mb-1 pl-1">
                {label} <Controller
                name={name || "content"}
                control={control} // control gives control of child's fields like variable and props to the parent
                render={({field:{onChange}})=>(
                    <Editor 
                    apiKey='q7ep8ywfmfr3a4m5w9h72mzrkeagf2khoujy1oufzqgbs3so'
                    initialValue={defaultValue}
                    init={{
                        height:500,
                        menubar: true,
                        plugins: [
                            "image",
                            "advlist",
                            "autolink",
                            "lists",
                            "link",
                            "image",
                            "charmap",
                            "preview",
                            "anchor",
                            "searchreplace",
                            "visualblocks",
                            "code",
                            "fullscreen",
                            "insertdatetime",
                            "media",
                            "table",
                            "code",
                            "help",
                            "wordcount",
                            "anchor"
                        ],
                        toolbar:
                        "undo redo | formatselect | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                        content_style: "body { font-family:Helvetica, Arial , sans-serif; font-size:14px}"
                    }}
                    onEditorChange={onChange}
                    />
                )}
                /></label>}
               
        </div>

    )
}






// import React from 'react';
// import { Editor } from '@tinymce/tinymce-react';
// import { Controller } from 'react-hook-form';

// export default function RTE({ name, control, label, defaultValue = "" }) {
//     return (
//         <div className="w-full">
//             {label && (
//                 // Nest the Controller inside the label
//                 <label className="inline-block mb-1 pl-1"> 
//                     {label}
//                     <Controller
//                         name={name || "content"}
//                         control={control}
//                         render={({ field: { onChange, value } }) => ( // Also get 'value' for controlled component
//                             <Editor
//                                 apiKey='q7ep8ywfmfr3a4m5w9h72mzrkeagf2khoujy1oufzqgbs3so'
//                                 initialValue={defaultValue}
//                                 value={value} // Set the value for react-hook-form
//                                 init={{
//                                     height: 500,
//                                     menubar: true,
//                                     plugins: [
//                                         "image", "advlist", "autolink", "lists", "link",
//                                         "charmap", "preview", "anchor", "searchreplace",
//                                         "visualblocks", "code", "fullscreen", "insertdatetime",
//                                         "media", "table", "help", "wordcount"
//                                     ],
//                                     toolbar:
//                                         "undo redo | formatselect | bold italic forecolor | " +
//                                         "alignleft aligncenter alignright alignjustify | " +
//                                         "bullist numlist outdent indent | removeformat | help",
//                                     content_style: "body { font-family:Helvetica, Arial, sans-serif; font-size:14px }"
//                                 }}
//                                 onEditorChange={onChange}
//                             />
//                         )}
//                     />
//                 </label>
//             )}
//         </div>
//     );
// }