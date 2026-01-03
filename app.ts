import initApp from "./server";
const port = process.env.PORT

console.log("here")
initApp().then((app) => {
    app.listen(port, () => {
        console.log(`Listening at http://localhost:${port}`);
    })
})