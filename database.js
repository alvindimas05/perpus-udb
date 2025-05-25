alasql("CREATE localStorage DATABASE IF NOT EXISTS librarydb");
alasql("ATTACH localStorage DATABASE librarydb");
alasql("USE librarydb");
alasql("CREATE TABLE IF NOT EXISTS books (id INT AUTOINCREMENT, title STRING, author STRING)");