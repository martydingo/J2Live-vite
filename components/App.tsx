import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "./ui/button"

export default function App() {
    return (
        <div className="flex justify-around">
            <div className="flex flex-col basis-1/3 h-[88vh]">
                <div className="h-1/3">
                    <Label htmlFor="yaml-variables">YAML Variables</Label>
                    <Textarea className="h-full" id="yaml-variables" />
                </div>
                <div className="h-1/6" />
                <div className="h-1/3">
                    <Label htmlFor="jinja2-template">Jinja2 Template</Label>
                    <Textarea className="h-full" id="jinja2-template" />
                </div>
            </div>
            <div className="basis-1/6 flex justify-center self-center">
                <Button>
                    Generate
                </Button>
            </div>
            <div className="basis-1/3">
                <Label htmlFor="generated-output">Generated Output</Label>
                <Textarea className="h-full" id="generated-output" disabled />
            </div>
        </div>
    )
}