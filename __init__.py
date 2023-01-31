from flask import Flask, render_template, request, jsonify, session, current_app, redirect
import sqlite3, os
from flask_mail import Mail, Message, Migrate
from app import mail, db

migrate = Migrate()
mail = Mail()  # 2. Instanciamos un objeto de tipo Mail
def create_app(settings_module):
    app = Flask(__name__, instance_relative_config=True)
    
    # Inicialización de la app
  
    db.init_app(app)
    migrate.init_app(app, db)
    mail.init_app(app)  # 3. Inicializamos el objeto mail

# Configuración del email
MAIL_SERVER = 'tu servidor smtp'
MAIL_PORT = 587
MAIL_USERNAME = 'tu correo'
MAIL_PASSWORD = 'tu contraseña'
DONT_REPLY_FROM_EMAIL = '(Refugio Huellitas, melimaidana@pioix.edu.ar)'
ADMINS = ('melimaidana@pioix.edu.ar', )
MAIL_USE_TLS = True

msg = Message("Hola",
              sender=("martin@rivasgarcia.com.ar"),
              recipients=("melimaidana@pioix.edu.ar"))

msg.body = 'Bienvenid@ a Refugio Huellitas'
msg.html = '<p>Bienvenid@ a <strong>Refugio Huellitas</strong></p>'

mail.send(msg)