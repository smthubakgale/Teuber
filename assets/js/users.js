/*
    Thubakgale MS - 201701870
    27-10-2021
 */
UserManagement("Client");

function UserManagement(user)
{
    if (user.trim() == "Visitor")
    {
        $(".visitor").show();

        $(".customer").hide();
        $(".client").hide();
        $(".freelancer").hide();
    }
    else
    { 
        $(".visitor").hide();
        if (user.trim() == "Customer")
        {
            $(".freelancer").hide();
            $(".customer").show();
            $(".client").hide();
        }
        if (user.trim() == "Client")
        {
            $(".freelancer").hide();
            $(".customer").hide();
            $(".client").show();
        }
        if (user.trim() == "Freelancer")
        {
            $(".customer").hide();
            $(".client").hide();
            $(".freelancer").show();
        }
    }
   

};