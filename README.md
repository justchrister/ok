# citrusstudio.no

cd /var/www/html
sudo rm -rf citrusstudio.no/
git clone https://github.com/justchrister/citrusstudio.no
cd
sudo chown -R $USER:$USER /var/www/citrusstudio.no/public_html
sudo chmod -R 755 /var/www
cd
sudo a2ensite 000-default.conf
systemctl reload apache2
sudo systemctl restart apache2
