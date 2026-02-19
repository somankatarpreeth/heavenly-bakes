🍰 Heavenly Bakes - Web Development Project A visually stunning and responsive frontend application built as a clean, multi-page bakery website using: 🖥️ Technologies: HTML5, CSS3, and Vanilla JavaScript It allows users to browse menus, manage a shopping cart, and place orders through a seamless, lightweight interface.

🚀 How to Run This Project (Locally) Since this project is built with standard web technologies, you can run it directly in any modern browser.

🎨 Running the Application Clone the repository:

Bash git clone https://github.com/somankatarpreeth/heavenly-bakes Navigate to the folder:

Bash cd heavenly-bakes Open the project:

Simply double-click the index.html file to open it in your default browser.

Alternative (Live Server): If using VS Code, right-click index.html and select "Open with Live Server".

📡 Features & Functionality The project focuses on a complete e-commerce flow for a bakery business, from product discovery to order confirmation.

Key Modules 🧾 Product Catalog & Selection

Description: A curated display of baked goods where users can browse various categories.

Logic: Users can select specific items they wish to buy and adjust quantities.

🛒 Cart Management (Add to Kart)

Description: A dynamic "Kart" system that tracks selected bakery items.

Logic: JavaScript manages the state of the cart, allowing users to add, remove, or view their total before proceeding to checkout.

📧 Order Placement & Email Confirmation

Description: A streamlined checkout process for finalizing the purchase.

Logic: Once a user places an order, a trigger is sent to provide an automated "Order Placed Successfully" email notification to the user.

⚙️ Assumptions Made 🧩 Project Structure The project follows a modular folder structure:

index.html → The main landing page and storefront.

/css → Contains specialized stylesheets for the "Kart" UI and product grids.

/js → Handles the logic for adding items to the cart and the order trigger.

/assets → High-resolution images of cakes, pastries, and breads.

🎨 UI/UX Assumptions Interactive Kart: The shopping cart updates in real-time without requiring a page refresh.

Responsive Design: Optimized for mobile ordering, ensuring a smooth experience for users on the go.

User Flow: A logical progression from Login/Signup ➔ Product Selection ➔ Kart ➔ Successful Checkout.

🗄️ Data & Email Handling Data Persistence: Uses localStorage to ensure the items in the "Kart" aren't lost if the user refreshes the page.

Email Integration: Utilizes an email service (such as EmailJS or a backend trigger) to send the confirmation receipt immediately after the order is finalized.

🧑‍💻 Author Developed by Preeth somankatar — Heavenly Bakes Project Built with ❤️ using HTML5, CSS3, and JavaScript
