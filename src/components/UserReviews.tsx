// import { useState } from "react";
// import { Button } from "@/components/ui/button";

// const ReviewForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     role: "",
//     rating: 5,
//     comment: ""
//   });

//   const [success, setSuccess] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("YOUR_GOOGLE_APPS_SCRIPT_URL", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData)
//       });
//       const data = await res.json();
//       if (data.status === "success") {
//         setSuccess(true);
//         setFormData({ name: "", role: "", rating: 5, comment: "" });
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-lg space-y-4">
//       <h3 className="text-xl font-bold">Submit Your Review</h3>

//       <Input
//         name="name"
//         placeholder="Your Name"
//         value={formData.name}
//         onChange={handleChange}
//         required
//       />

//       <Input
//         name="role"
//         placeholder="Your Role / Position"
//         value={formData.role}
//         onChange={handleChange}
//       />

//       <Select name="rating" value={formData.rating} onChange={handleChange}>
//         {[5,4,3,2,1].map(num => (
//           <option key={num} value={num}>{num} Star{num > 1 ? "s" : ""}</option>
//         ))}
//       </Select>

//       <Textarea
//         name="comment"
//         placeholder="Your Review"
//         value={formData.comment}
//         onChange={handleChange}
//         required
//       />

//       <Button type="submit">Submit Review</Button>

//       {success && <p className="text-green-600 mt-2">Thank you! Your review has been submitted.</p>}
//     </form>
//   );
// };

// export default ReviewForm;
