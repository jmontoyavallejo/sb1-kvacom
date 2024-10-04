import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

// Placeholder user data
const user = {
  fullName: "John Doe",
  email: "john.doe@example.com",
  imageUrl: "https://example.com/avatar.jpg",
};

export default function MyAccountPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Account</h1>
      <div className="flex items-center space-x-4 mb-6">
        <Avatar className="w-24 h-24">
          <AvatarImage src={user.imageUrl} alt={user.fullName} />
          <AvatarFallback>{user.fullName.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-2xl font-semibold">{user.fullName}</h2>
          <p className="text-muted-foreground">{user.email}</p>
        </div>
      </div>
      <Button>Update Profile</Button>
      {/* Add more account management options here */}
    </div>
  );
}