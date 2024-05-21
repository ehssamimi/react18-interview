import TextField from "@mui/material/TextField";
import {Button, Stack} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs={
    fName:string,
    lName:string,
    email:string,

}
const ReactHookFormEx = () => {
    const {register,handleSubmit,formState:{errors}}=useForm<Inputs>({
        defaultValues: async ()=>{
            const resp=await fetch('https://jsonplaceholder.typicode.com/users/1').then(resp=>resp.json())
            return{
                email:resp.email
            }
        }
    })
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)


    return (
        <form dir="rtl" className='w-3/6 md:w-1/6' onSubmit={handleSubmit(onSubmit) }>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={3}

            >
                <h2 className='text-right w-full mb-1'>فرم پر کردن اطلاعات کاربری</h2>
                <TextField
                    type='text'
                    label="نام"
                    placeholder="نام خود را وارد کنید "
                    helperText={`${errors.fName?errors.fName?.message:''}`}
                    error={!!errors.fName}
                    variant="outlined"
                    className='w-full'
                    {...register('fName',{
                        required:'فیلد نام اجباری است ',
                        validate:(field:string)=>{
                          return (field!=='ehsan'||'لطفا یک نام دیگر انتخاب کنید ')
                        }
                    })}
                />

                <TextField
                    type='text'
                    label="نام خانوادگی "
                    placeholder="نام خانوادگی خود را وارد کنید "
                    // helperText="هذا نص مساعد"
                    variant="outlined"
                    className='w-full'
                    helperText={`${errors.lName?errors.lName?.message:''}`}
                    error={!!errors.lName}
                    {...register('lName',{
                        validate:{
                            notAdmin:(field)=>{
                                return (field!=='samimi'||'لطفا یک نام دیگر انتخاب کنید ')
                            },
                            notBlocking:(field)=>{
                                return( !field.endsWith('ن')||'لطفا نام فامیل با ن تمام نشود ')
                            }
                        }
                    })}
                />

                              <TextField
                    type='text'
                    label="ایمیل "
                    placeholder="ایمیل خود را وارد کنید "
                    // helperText="هذا نص مساعد"
                    variant="outlined"
                    className='w-full'
                    helperText={`${errors.email?errors.email?.message:''}`}
                    error={!!errors.email}
                    {...register('email',{
                        required:"فیلد ایمیل اجباری است ",

                        pattern:{
                            value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message:"لطفا در فرمت مورد نظر وارد کنید "

                        }
                    })}
                />

                <Button variant="outlined" type='submit'>submit </Button>
            </Stack>


        </form>
    );
};

export default ReactHookFormEx;
