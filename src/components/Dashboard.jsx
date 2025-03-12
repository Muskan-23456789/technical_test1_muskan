import { useState } from "react";
import UserCard from "./UserCard";

const Dashboard = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Muskan Singh",
      email: "Muski123@example.com",
      age: 22,
      image:
        "https://media.istockphoto.com/id/1480574526/photo/happy-multigenerational-people-having-fun-sitting-on-grass-in-a-public-park.webp?b=1&s=612x612&w=0&k=20&c=pFM42auh4hBX6Srn2JS8xiLOqWxo2nfC5_GSZMAh6y8=",
    },
    {
      id: 2,
      name: "Khushi Singh",
      email: "Khushi234@example.com",
      age: 24,
      image:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "Renu Devi",
      email: "Renu789@example.com",
      age: 45,
      image:
        "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww",
    },
    {
      id: 4,
      name: "Raj Kumar",
      email: "raj456@example.com",
      age: 28,
      image:
        "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 5,
      name: "Priya Sharma",
      email: "priya567@example.com",
      age: 26,
      image:
        "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        User Dashboard
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            age={user.age}
            image={user.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
