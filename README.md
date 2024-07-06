# Open Source Enterprise Solutions
Welcome to the Open Source Enterprise Solutions repository! This repository is a curated list of open source software that can be used in enterprise environments. Whether you are looking for a CRM, ERP, or other enterprise-grade solutions, you'll find it here.

**Note**: This repository is not associated with nor affiliated with any of the listed solutions.

## Table Of Contents
* [Contributing](/CONTRIBUTING.md)
* [License](#license)
* [Solutions](#solutions)
	* [File Storage & Sharing](#file-storage--sharing)
	* [Human Resources Management](#human-resources-management)
	* [Mail](#mail)
	* [Password Manager](#password-manager)
	* [Scheduling & Time Management](#scheduling--time-management)
	* [Virtual Machines](#virtual-machines)
	* [VPN](#vpn)


## Solutions
The solutions are listed by alphabetical order.

### File Storage & Sharing
| Name | Description | Can be Self Hosted |
| --- | --- | --- |
| [Nextcloud](https://nextcloud.com/) | Self-hosted file storage and sync platform with powerful collaboration capabilities with desktop, mobile and web interfaces. | <details><summary>:heavy_check_mark:</summary>Installation Command: `sudo docker run --init --sig-proxy=false --name nextcloud-aio-mastercontainer --restart always --publish 80:80 --publish 8080:8080 --publish 8442:8442 --volume nextcloud_aio_mastercontainer:/mnt/docker-aio-config --volume /var/run/docker.sock:/var/run/docker.sock:ro nextcloud/all-in-one:latest`</details> |
| [Proton Drive](https://proton.me/drive) | End-to-end encryption for your cloud storage. | :x: |

### Human Resources Management
| Name | Description | Can be Self Hosted |
| --- | --- | --- |
| [OrangeHRM](https://www.orangehrm.com/) | HRIS expirience from talent management to culture, to people management and compensation. | :x: |

### Mail
| Name | Description | Can be Self Hosted |
| --- | --- | --- |
| [Proton Mail](https://proton.me/mail) | Encrypted email service based in Switzerland. | :x: |

### Password Manager
| Name | Description | Can be Self Hosted |
| --- | --- | --- |
| [BitWarden](https://bitwarden.com/) | Store, manage, and share passwords, passkeys, credit cards, and more. | <details><summary>:heavy_check_mark:</summary>Installation Commands: <ul><li>`curl -s -L -o bitwarden.sh 'https://func.bitwarden.com/api/dl/?app=self-host&platform=linux'`</li><li>`chmod +x bitwarden.sh`</li><li>`./bitwarden.sh install`</li><li>`./bitwarden.sh start`</li></ul></details> |
| [Proton Pass](https://proton.me/pass) | Store, share and auto-login your accounts using end-to-end encryption. | :x: |

### Scheduling & Time Management
| Name | Description | Can be Self Hosted |
| --- | --- | --- |
| [Proton Calendar](https://proton.me/calendar) | Your calendar is a record of your life. Proton Calendar helps keep it private. | :x: |

### Virtual Machines
| Name | Description | Can be Self Hosted |
| --- | --- | --- |
| [Proxmox](https://proxmox.com/) | Enterprise virtualization with backing up and restoring VMs, containers, and physical hosts. | <details><summary>:heavy_check_mark:</summary>Installation Command: `echo 'Go to https://proxmox.com/downloads and download the ISO'`</details> |

### VPN
| Name | Description | Can be Self Hosted |
| --- | --- | --- |
| [Proton VPN](https://protonvpn.com/) | Anonymous VPN service that keeps your browsing history private without logging. | :x: |


## License
This project is licensed under the [CC0 1.0 Universal (CC0 1.0) Public Domain Dedication](https://creativecommons.org/publicdomain/zero/1.0/).