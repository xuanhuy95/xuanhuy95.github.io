ansible-playbook -i env/live/hosts build.yml --vault-password-file .vault_pass_live
ansible-playbook -i env/live/hosts release.yml
