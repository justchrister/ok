# citrusstudio.no


Update;
```
cd /var/www/html
sudo rm -rf citrusstudio.no/
git clone https://github.com/justchrister/citrusstudio.no
cd
sudo chown -R $USER:$USER /var/www/html/citrusstudio.no/public_html

```

If update fails; 
```
cd /var/www/html
sudo rm -rf citrusstudio.no/
git clone https://github.com/justchrister/citrusstudio.no
cd
sudo chown -R $USER:$USER /var/www/html/citrusstudio.no/public_html
sudo chmod -R 755 /var/www
cd
sudo a2ensite 000-default.conf
systemctl reload apache2
sudo systemctl restart apache2

```
