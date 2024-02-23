import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

function DashBoardPage() {

    const { getUser } = getKindeServerSession();
    const user = getUser();

    if(!user){
        return redirect('/')
    }
    
    return (
        <div>
            DashBoardPage
        </div>
    )
}

export default DashBoardPage