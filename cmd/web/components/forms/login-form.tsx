import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button"
import Form from "next/form";
import {login} from "@/server/login";
import {Input} from "@/components/ui/input"

const LoginForm = () => {


    return (
        <>
            <Card className="w-full max-w-md mx-auto">
                <Form action={login}>
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
                        <CardDescription className="text-center">Enter your credentials to access your
                            account</CardDescription>
                    </CardHeader>


                    <CardContent className={'space-y-4 gap-2'}>


                        <Input type="email" name={"email"} placeholder="Email" className={'my-2'}/>
                        <Input type="password" name={"password"} placeholder="Password"/>

                    </CardContent>
                    <CardFooter>
                        <Button type={'submit'}>
                            Login
                        </Button>

                    </CardFooter>
                </Form>
            </Card>

        </>
    );
};

export default LoginForm;


// created on 04/02/2025 15:15