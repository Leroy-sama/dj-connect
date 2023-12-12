<template>
    <header>
        <nav>
            <h1>
                <RouterLink to="/">DjConnect</RouterLink>
            </h1>
            <ul>
                <li>
                    <RouterLink to="/djs">All Djs</RouterLink>
                </li>
                <li>
                    <RouterLink to="/requests">Requests</RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
    :root {
        --color-01: #663399;
        --color-02: #1f9fb6;
    }

    nav {
        padding: 1em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: white;
    }

    nav a {
        text-decoration: none;
        color: rgb(4, 4, 17);
    }

    nav ul {
        display: flex;
        gap: 2em;
    }

    nav ul li {
        list-style: none;
    }

    nav ul li a {
        padding: 0.5em 1em;
    }

    nav ul li a:hover {
        color: #5928e5;
    }

    nav ul li a.router-link-active {
        border: 1px solid #5928e5;
        color: #5928e5;
    }
</style>
