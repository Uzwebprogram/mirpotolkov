import styled from "styled-components";

export const Wrapper = styled.div`
	width: 100%;
	padding: 30px;
`

export const Container = styled.div`
width: 100%;
table{
	font-family: sans-serif;
	border-collapse: collapse;
	width:100%;
  }

  th{
	background-color: #224066;
	color: white;
  }
  #thead th {
    text-align: left;
  }
  th, td{
	padding: .8rem;
	font-size: 12px;
	text-align: center;
    color: white;
	text-transform: uppercase;
  }
    img{
    border-radius: 50%;
  }
  
  tbody tr td {
	background-color: white;
	color: black;
  }
  #tbody tr td {
    text-align: left;
    span{
        position: relative;
        bottom: 15px;
    }
}
  
  @media screen and (max-width: 600px){
	thead{
	  display: none;
	}
  
	td{
	  display: block;
	}
  
	td:first-child{
	  background-color: #333;
	  color: #fff;
	  text-align: center;
	}
	
	td:nth-child(2)::before{
	  content: "Company";
	}
  
	td:nth-child(3)::before{
	  content: "Age";
	}
  
	td:nth-child(4)::before{
	  content: "Designation";
	}
  
	td:nth-child(5)::before{
	  content: "Hobbies";
	}
  
	td{
	  text-align: right;
	}
  
	td::before{
	  float: left;
	  margin-right: 3rem;
	  font-weight: bold;
	}
  }
`