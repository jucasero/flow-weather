import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Login } from "./views/Login/Login";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<Login message="Bienvenido a Flow Weather" buttonText="Ingresar" />
		),
	},
]);

const root = document.getElementById("root") as HTMLElement;

createRoot(root).render(<RouterProvider router={router} />);
