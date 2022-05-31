import logo from "./logo.svg";
import "./App.css";
import TestFetchComponent from "./component/fetch/testFetchComponent";
import TestAxiosComponent from "./component/axios/testAxiosComponent";
import FormularioComponent from "./component/form/formuarioComponent";
import UsarioComponent from "./component/users/usuarioComponent";
import ListarUsuariosComponent from "./component/users/listarUsuariosComponent";
import FormikFormComponent from "./component/formik/formikForm";
import Formik2FormComponent from "./component/formik/formik2Form";

function App() {
  return (
    <div className="App">
      <body className="App-body">
        {/** 
               <TestFetchComponent></TestFetchComponent>
                <TestAxiosComponent></TestAxiosComponent>
                <FormularioComponent></FormularioComponent>
                <FormularioComponent
                  salir={(form) =>
                    alert(
                      `Saliste del formulario con los valores ${JSON.stringify(form)}`
                    )
                  }
                  
                ></FormularioComponent>
         **/}

        <Formik2FormComponent user={{name:"",email:"",edad:undefined,gender:"",status:"",}}></Formik2FormComponent>
        
      </body>
    </div>
  );
}

export default App;




