import { useState } from "react";

const PetAdoptionForm = () =>{
    const [formData, setFormData] = useState([]);
    const [values, setvalues] = useState({
        petName: "",
        petType:"Dog",
        breed: "",
        adopterName: "",
        email: "",
        phone: ""
    });

    const [showTable, setShowTable] = useState(false);
    const {petName, petType, breed, adopterName, email, phone} = values;
    console.log(petName, petType, breed, adopterName, email, phone);

    const [errors, setErrors] = useState({
        petName: "",
        petType: "",
        breed: "",
        adopterName: "",
        email: "",
        phone: ""
    })

    const handleChange = (event) =>{
        /* The code snippet `const { name, value } = event.target;` is extracting the `name` and `value`
        properties from the event target object. In this case, it is typically used in an input
        change event handler to get the name and value of the input field that triggered the change. */
        const {name, value} = event.target;
        setvalues((prevValues)=>({
            ...prevValues,
            [name]: value,
        }));

        /* The line `let errorsCopy = { ...errors };` is creating a shallow copy of the `errors` object using
        the spread operator (`...`). This is done to ensure that any modifications made to `errorsCopy` do
        not directly affect the original `errors` object. */

        let errorsCopy = {...errors};
        const errorR = validation(name, value,errorsCopy);
        setErrors(errorR)
    }
}

export default PetAdoptionForm;