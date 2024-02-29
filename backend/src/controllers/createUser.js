import User from "../models/userModel"


// Define an async function to create a new user
 async function createUser(req, res) {
    // Destructure user details from the request body
    const { email, name, password, address } = req.body;

    try {
        // Create a new user instance
        const newUser = new User({
            email,
            name,
            password, // Note: Password hashing should be done before saving to the database
            address
        });

        // Save the user to the database
        await newUser.save();

        // Send a success response
        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        // If an error occurs, send an error response
        res.status(500).json({ error: "Could not create user", details: error.message });
    }
}


export {
    createUser
}