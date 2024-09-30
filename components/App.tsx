"use client";

import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "./ui/button"
import { useState } from "react";

async function renderTemplate(yamlVariables: string, jinja2Template: string) {
    try {
        const postRequest = await fetch("http://localhost:8000/", {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify({
                "YAML": yamlVariables,
                "Jinja": jinja2Template
            }),
            mode: 'cors',
        })
        const postResponse = await postRequest.json()        
        return postResponse['message']

    }
    catch (err) { return err }
}

export default function App() {
    const [formData, setFormData] = useState({
        yamlVariables: "",
        jinjaTemplate: "",
        generatedOutput: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
        let generatedOutput
        if(name === "yamlVariables"){
            generatedOutput = renderTemplate(value, formData.jinjaTemplate)
        } else {
            generatedOutput = renderTemplate(formData.yamlVariables, value)
        }
        Promise.all([generatedOutput]).then((output) => {
            console.log(output)
            setFormData((prevState) => ({...prevState, generatedOutput: output as unknown as string}))
        })


    };

    return (
        <div className="flex justify-around">
            <div className="flex flex-col basis-1/3 h-[88vh]">
                <div className="h-1/3">
                    <Label htmlFor="yaml-variables">YAML Variables</Label>
                    <Textarea className="h-full font-mono" name="yamlVariables" id="yaml-variables" value={formData.yamlVariables} onChange={handleChange} />
                </div>
                <div className="h-1/6" />
                <div className="h-1/3">
                    <Label htmlFor="jinja2-template">Jinja2 Template</Label>
                    <Textarea className="h-full font-mono" name="jinjaTemplate" id="jinja2-template" value={formData.jinjaTemplate} onChange={handleChange} />
                </div>
            </div>
            <div className="basis-1/3">
                <Label htmlFor="generated-output">Generated Output</Label>
                <Textarea className="h-full" name="generatedOutput" id="generated-output" value={formData.generatedOutput} onChange={handleChange} disabled />
            </div>
        </div>
    )
}