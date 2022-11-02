import styled from "styled-components";
import  PhoneInput  from 'react-phone-input-2';
export const ModalHeader = styled.div`
  h2 {
    color: #000;
    font-size: 21px;
    text-align: center;
    font-weight: 200;
    text-transform: uppercase;
    margin:0 55px 15px 55px;

  }
`;

export const ModalBody = styled.div``;

export const ModalForm = styled.form`
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 width: 100%;
 input{
    width: 100%;
    background-color: #fff;
    border-radius: 36px;
    border: 2px solid #777;
    color: #777;
    font-size: 16px;
    margin-top: 6px;
    padding: 11px 58px !important ;
    width: 100%;
 }
 input:focus{
    border: 2px solid #d4665c;
 }
 button{
    border: 8px solid #d78f88;
    color: #fff;
    background: #d4665c;
    border-radius: 31px;
    box-shadow: -2px 2px 20px 2px rgb(56 53 51 / 36%);
    cursor: pointer;
    display: block;
    font-size: 14px;
    letter-spacing: 1.9px;
    line-height: 1;
    margin: 0 auto 5px;
    padding: 10px 0;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s ease 0s;
    width: 100%;
    margin: 10px 0;
 }
`;

export const ModalFooter = styled.div`
 p{
    font-size: 12px;
    text-align: center;
 }
`
export const ReactPhoneInput = styled(PhoneInput)`
   margin-top: 10px;
   height: 60px;
   width: 100% !important;
   @media only screen and (max-width: 769px) {
    width: 100% !important;
    }
   input {
    width: 100% !important;
    height: 50px !important;
    background: white !important;
    border-radius: 25px !important;
   }

   .special-label{
    display: none;
   }
   .flag-dropdown{
    width: 50px !important;
    height: 50px !important;
    background-color: #d4665c !important;
    border-bottom-left-radius: 25px;
    border-top-left-radius: 25px;
    color: white !important;
  }
   .form-control{
    padding-right: 0px !important;
  }
  .selected-flag{
    background-color: #d4665c !important;
    border-bottom-left-radius: 25px;
    border-top-left-radius: 25px;
    color: white !important;
  }
  .country-list{
    background-color: #d4665c !important;
    border-bottom-left-radius: 25px;
    border-top-left-radius: 25px;
   color: white !important;
  }
  .country-list .country{
    background-color: #d4665c !important;
    border-bottom-left-radius: 25px;
    border-top-left-radius: 25px;
    color: white;
  }
  .react-tel-input .flag-dropdown.open{
   border-bottom-left-radius: 25px !important;
    border-top-left-radius: 25px !important;
  }
`