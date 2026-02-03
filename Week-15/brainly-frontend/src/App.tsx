import { PlusIcon } from "./components/icons/PlusIcon";
import { Button } from "./components/ui/Button";
import SocialFlipButton from "./components/ui/ContactUs";

export default function App() {
    return (
        <div className="p-8">
            {/* <SocialFlipButton /> */}
            <Button startIcon={<PlusIcon/>} variant="primary" size="sm" text="Share" onClick={() => alert('Clicked!')} />
            <Button variant="secondary" size="md" text="Add Content" onClick={() => alert('Cancelled!')} />
            <Button variant="secondary" size="lg" text="Add Content" onClick={() => alert('Cancelled!')} />
        </div>
    );
}