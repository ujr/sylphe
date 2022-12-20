
STICK=/media/ujr/MEMSTICKUJR


default:
	git status

publish:
	@echo "Publish on GitHub Pages ..."
	git push origin

#publish:
#	@echo "Publishing ./site/ to foo.bar.ch"
#	rsync -av --delete --exclude ".*.swp" --exclude ".fslckout" \
#	  --exclude ".well-known/" \
#	  ./site/ foo.bar.ch:/data/httpd/sylphe.ch/htdocs/

# Sync with the default server URL (see `fossil help remote-url').
# Don't specify the URL below; a plain "fossil sync" uses the last-used
# URL with the last-used credentials and does not prompt for a password.

sync:
	@echo "Syncing with `fossil remote-url`"
	@fossil sync

nine:
	@echo "Fossil push to 192.168.1.9..."
	@echo "Will be prompted for credentials!"
	fossil push https://ujr@192.168.1.9/fossils.cgi/sylphe --once

stick:
	@echo "Fossil push to memory stick..."
	@echo "Make sure the memory stick is mounted!"
	fossil push $(STICK)/Vault/sylphe.fossil --once

