# REIT-BUILDER
## 1. Setting up the database

Mac:
- Make sure that you don't have Postgres installed.
	- Open up your terminal and run `psql`
		- Looking for something that says "Command not found."
		- If you already have Postgres installed, it might be easier to just go ahead and uninstall it and then following the next steps.
- Download Postgres at the following link -> https://postgresapp.com/downloads.html
- After downloading it and moving the app to your applications folder, go back to the introduction tab (https://postgresapp.com/)
- Copy step 3 and paste it into your terminal.
	- `sudo mkdir -p /etc/paths.d && echo /Applications/Postgres.app/Contents/Versions/latest/bin | sudo tee /etc/paths.d/postgresapp`
	- It will ask for your computer password
	- Close your terminal and open a new one.
- Run the command `psql` again.
	- Should get an error that says something along the lines of:
		error: could not connect to server: could not connect to server: No such file or directory ...
- Open up the Postgres application that you just downloaded
- Click `Initialize` in the window that pops up
	- This will start your PostgreSQL
- Go back to your terminal, and, once again, run `psql`
- You should now be inside the Postgres command line interface.
	- You can exit this by typing `exit`
- Next step is to download PGAdmin by going to pgadmin.org/download
- Download the MacOS version (The DMG version)
- Move the application to your application folder
- Open the application that you just moved into your applications folder
- Create a password in the popup window that opens for you.
	- This is a password to access pgadmin on your machine. Use any password that you want to you and that you won't forget.
- On the left side of the screen where it says "Servers", right click "Servers" -> Register -> Server...
- The name should be "localhost"
- On the "Connection" tab, enter the host name of "localhost"
- Change the username to your system username
	- If you don't know your system username, you can type `whoami` in your terminal, and it will give you your name.
- You should see localhost on the left hand side
	- This is a graphical user interface to help you be able to see the DB, tables, and data easier than using a CLI.

Windows: 
- postgresql.org/download/windows
- Click the "Download Installer" link at the top.
- Click the newest version available download link
- Run the installer once it has been downloaded.
- In the "Select Components" screen, uncheck "Stack Builder"
	- Stack builder is not needed.
- Once you get to the password section, it is recommended to use use "password" for now.
	- This is only a password to get into the postgres CLI, and if you forget it, you will not be able to get back in.
	- The password can be changed later.
- Leave the default port and local
- In the search bar, you can search for pgAdmin 4
- You'll have to create a new password for pgAdmin
	- It is recommended to use the same password that you just used for the postgres downloaded
- Click on "Servers" on the top left hand side.
	- As soon as you click on it, it will ask you to enter the password that you just created while installing Postgres.
  
## 2. Setting up Django
 - Clone the repository 
 - Navigate to backend > src > training
 - install Django by following this turorial -> https://docs.djangoproject.com/en/4.1/topics/install/
 - install psycopg2 for postgreSQL connection using `pip install psycopg2-binary`
 - install corsheaders using `pip install django-cors-headers`
 - install django-rest-framework using `pip install djangorestframework`
 
## 3. Updating Database connection
 - Navigate to backend > src > training > training 
 - Open settings.py
 - Update Database name, user and password with your database settings
 ```
 DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'yourDatabaseName',
        'USER': 'yourPostgresUser',
        'PASSWORD': 'yourPostgresUserPassword',
        'HOST': '127.0.0.1',
        'PORT': '5432',
    }
}
 ```
## 4. Setting up React app
- Navigate to frontend > src > my-trainer
- Make sure you have Node installed on your system 
  - if not you can install Node by following this tutorial -> https://nodejs.dev/en/
- Run npm install

## 5. Running the application

### - Run back end server
- Navigate to backend > src > training 
- Run `python manage.py runserver`
- The server will start running on `http://127.0.0.1:8000/`
- This is critical to hit the REST API defined in Django

### - Run the front end server
- Navigate to frontend > src > my-trainer
- Run `npm start`

The Application is now up and running and you can add trainings, and view existing trainings.

 
