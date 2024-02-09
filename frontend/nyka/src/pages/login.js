import { styled } from "styled-components";
export const Login=()=>{
    return(
        <Div>
          <ImageDiv>
            <Image src="https://s3-alpha-sig.figma.com/img/741a/304e/6aeb4d492404ee3b62a8dafddbe2b5d0?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MEHVykDkxbmv9uhykU06aEiSY1ESXlBACD2kiqj9ctMZQIH16QSlA6PW~wQW1DYWu5AzznCQbVi4KbFTML2M~RM84SwMHcqBet63SJEbgq7R1W8cnpLMDHJu4eSpPepTWsj044970qKgU1ezURBOrsndZRGqj6~J7t~hjke4cJ6rw8c0eIvYu~ZUGl2NjK6KEXJ0-9CvWFEHAeM2A5DX0KPDRWeMNQDrl5qN1Pw7I5wHh0A~c~r4sIwdqq2FnTgRBYsTC3iOYohbPARKJECq6FxJy2~0EY0qH9EI24M7CCm43nUgkl6JmEf6T52Z023U8pV9LMVg5uhFJ4xeytj7mQ__"></Image>
          </ImageDiv>
          <LoginDiv>
            <Dive>
              <h1>MASAI FOREM</h1>
              <div>
               <p>Nice to see you again</p>
               <form>
                <label>Login</label>
                <br></br>
                <input placeholder="Email"></input>
                <br></br>
                <label>password</label>
                <br></br>
                <input placeholder="Email"></input>
                <button type="submit">Sign in</button>
               </form>
              

                <h2>Dont have an account?sign up now</h2>
              </div>
            </Dive>

          </LoginDiv>
          
        </Div>
    )
}

const Div=styled.div`
 width:100%;
 display:flex;
  
`
const ImageDiv=styled.div`
  width:75%;
  height:900px;
   
`
const Image=styled.img`
 width:100%;
 height:100% ;
`
export const LoginDiv=styled.div`
width:25%;
background-color: hsla(0, 0%, 100%, 1);
padding:48px;

`
export const Dive=styled.div`
width:90%;
margin:auto;

height:560px ;
 h1{
    text-align:center;
    font:"Roboto";
    font-size:24px;
    font-weight:500;

 };
 div{
    margin-top:30px;
   p{
    font:"Poppins";
    font-size:20px;
    font-weight:bold;

    color:hsla(0, 0%, 10%, 1)
   };
   form label{
    font:"SF Pro Display";
    font-size:15px;
    color:hsla(0, 0%, 20%, 1);
    gap:10px;
    
   }

   form input{
    width:100%;
    height:28px;
    padding:1px;
    border-radius:5px;
    margin-bottom:20px;
    margin-top:5px
   };
   form button{
    width:100%;
    height:38px;
    border-radius:6px;
    
    background:hsla(211, 100%, 50%, 1);
    margin-bottom:20px;
    margin-top:20px
   };
   h2{
    font:"SF Pro Display";
    font-size:15px;
    font-weight:normal;
    color:hsla(0, 0%, 10%, 1);
    

   }

 }
`