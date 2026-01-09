* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f8f9fa;
    color: #333;
    line-height: 1.6;
}

header {
    background-color: #ffffff;
    padding: 1rem 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
}

header h1 {
    color: #2c3e50;
    font-size: 1.5rem;
    font-weight: 700;
}

nav ul {
    list-style: none;
    display: flex;
    align-items: center;
}

nav ul li {
    margin-left: 20px;
}

nav ul li a {
    text-decoration: none;
    color: #555;
    font-weight: 500;
    transition: color 0.3s;
}

nav ul li a:hover {
    color: #3498db;
}

.btn-help {
    background-color: #3498db;
    color: white !important;
    padding: 8px 15px;
    border-radius: 5px;
}

/* Hero Section */
.hero {
    background: linear-gradient(rgba(44, 62, 80, 0.8), rgba(44, 62, 80, 0.8)), 
                url('https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&q=80&w=1200');
    background-size: cover;
    background-position: center;
    color: white;
    padding: 100px 10%;
    text-align: center;
}

.hero h3 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    opacity: 0.9;
}

.hero-btns .main-btn,
.hero-btns .alt-btn {
    text-decoration: none;
    padding: 12px 25px;
    border-radius: 30px;
    font-weight: bold;
    margin: 0 10px;
    display: inline-block;
    transition: transform 0.2s, background-color 0.2s;
}

.main-btn {
    background-color: #3498db;
    color: white;
}

.alt-btn {
    background-color: white;
    color: #2c3e50;
}

.hero-btns a:hover {
    transform: translateY(-2px);
}

.container {
    padding: 50px 10%;
}

.info-box {
    background-color: white;
    padding: 30px;
    margin-bottom: 30px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.helpline {
    border-left: 5px solid #3498db;
}

footer {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 20px;
}
