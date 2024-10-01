import express from "express";

export function homeRouter(){
    const router = express.Router();
    router.get("/", async (req, res) => {
        res.render("index", {
            title: "Home"
        })
    });
    return router;
}