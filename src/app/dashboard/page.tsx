import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

function DashBoardPage() {

    const { getUser } = getKindeServerSession();
    const user = getUser();

    if(!user){
        return redirect('/auth-callback?origin=dashboard')
    }
    
    return (
        <div>
            DashBoardPage
        </div>
    )
}

export default DashBoardPage