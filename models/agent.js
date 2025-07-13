// const mongoose = require("mongoose");

// const agentSchema = new mongoose.Schema({
//     firstName: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     lastName: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         lowercase: true
//     },
//     phone: {
//         type: Number,
//         required: true
//     },
//     address: {
//         type: String,
//         required: true
//     },
//     assignedDonations: [
//         {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "donations"
//         }
//     ],
//     status: {
//         type: String,
//         enum: ["active", "inactive", "suspended"],
//         default: "active"
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now
//     }
// });

// const Agent = mongoose.model("agents", agentSchema);
// module.exports = Agent;
