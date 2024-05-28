"use client"
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import GlobalApi from '@/app/_services/GlobalApi'
  

const AddNewStudent = () => {
    const [open, setOpen] = useState(false)
    const [grades, setGrades] = useState([])
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      useEffect(()=>{
        GetAllGradesList()
      },[])

      const GetAllGradesList=()=>{
        GlobalApi.GetAllGrades().then(resp=>{
            // console.log(resp.data);
            setGrades(resp.data)
        })
      }

      const onSubmit=async(data)=>{
        console.log(data);
      }

  return (
    <div>
        <Button onClick={()=>setOpen(true)}>
            + Add New Student
        </Button>
        <Dialog open={open}>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Add New Student</DialogTitle>
                <DialogDescription>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='py-2'>
                        <label>Full Name</label>
                        <Input placeholder='Ex. Dinesh Gaire'
                        {...register('name', {required:true})}
                        />
                    </div>
                    <div className='py-2 flex flex-col'>
                        <label>Select Grade</label>
                        <select className='p-3 border rounded-lg'
                        {...register('grade', {required:true})}
                        >
                            {grades.map((item,index)=>(
                                <option key={index} value={item.grade}>{item.grade}</option>
                            ))}
                        </select>
                    </div>
                    <div className='py-2'>
                        <label>Contact Number</label>
                        <Input type="number" placeholder='Ex. 9812345678'
                        {...register('contact', {required:true})}
                        />
                    </div>
                    <div className='py-2'>
                        <label>Address</label>
                        <Input placeholder='Ex. Tinkune, Kathmandu'
                        {...register('address', {required:true})}
                        />
                    </div>

                    <div className='flex gap-3 items-center justify-end mt-5'>
                        <Button onClick={()=>setOpen(false)} variant='ghost'>Cancel</Button>
                        <Button
                            type="submit"
                        >Save</Button>
                    </div>
                </form>
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default AddNewStudent