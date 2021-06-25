ansible-playbook -i env/staging/hosts build.yml --vault-password-file .vault_pass_staging
ansible-playbook -i env/staging/hosts release.yml
