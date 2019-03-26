Contact Center
==============

 Distributed in Threshold / (Answered + Abandoned - Short Abandoned Calls) * 100


echo $JAVA_HOME /Library/Java/JavaVirtualMachines/1.7.0.jdk/Contents/Home


export JAVA_HOME='/Applications/Android\ Studio.app/Contents/jre/jdk/Contents/Home'

/Applications/Android\ Studio.app/sdk/platform-tools
/Users/xiencias/Library/Android/sdk


export JAVA_HOME=/Applications/Android\ Studio.app/Contents/jre/jdk/Contents/Home
export PATH=${JAVA_HOME}/bin:$PATH

# Set Android_HOME
export ANDROID_HOME=/Users/xiencias/Library/Android/sdk

# Add the Android SDK to the ANDROID_HOME variable
export PATH=$ANDROID_HOME/platform-tools:$PATH
export PATH=$ANDROID_HOME/tools:$PATH

#Set GRADLE_HOME
export GRADLE_HOME=/Applications/Android\ Studio.app/Contents/gradle/gradle-4.1
export PATH=$PATH:$GRADLE_HOME/bin

<?php
class JConfig {
	public $offline = '0';
	public $offline_message = 'This site is down for maintenance.<br />Please check back again soon.';
	public $display_offline_message = '1';
	public $offline_image = '';
	public $sitename = 'Housefinish';
	public $editor = 'tinymce';
	public $captcha = '0';
	public $list_limit = '20';
	public $access = '1';
	public $debug = '0';
	public $debug_lang = '0';
	public $dbtype = 'mysqli';
	public $host = 'localhost';
	public $user = 'housefinish';
	public $password = 'lechugas2017K;';
	public $db = 'housefinish_joomla';
	public $dbprefix = 'smpk9_';
	public $live_site = '';
	public $secret = 'U66D8CjW57bFVo5g';
	public $gzip = '0';
	public $error_reporting = 'default';
	public $helpurl = 'https://help.joomla.org/proxy?keyref=Help{major}{minor}:{keyref}&lang={langcode}';
	public $ftp_host = '';
	public $ftp_port = '';
	public $ftp_user = '';
	public $ftp_pass = '';
	public $ftp_root = '';
	public $ftp_enable = '0';
	public $offset = 'UTC';
	public $mailonline = '1';
	public $mailer = 'mail';
	public $mailfrom = 'soporte@vmcpartner.com';
	public $fromname = 'Housefinish';
	public $sendmail = '/usr/sbin/sendmail';
	public $smtpauth = '0';
	public $smtpuser = '';
	public $smtppass = '';
	public $smtphost = 'localhost';
	public $smtpsecure = 'none';
	public $smtpport = '25';
	public $caching = '0';
	public $cache_handler = 'file';
	public $cachetime = '15';
	public $cache_platformprefix = '0';
	public $MetaDesc = '';
	public $MetaKeys = '';
	public $MetaTitle = '1';
	public $MetaAuthor = '1';
	public $MetaVersion = '0';
	public $robots = '';
	public $sef = '1';
	public $sef_rewrite = '0';
	public $sef_suffix = '1';
	public $unicodeslugs = '0';
	public $feed_limit = '10';
	public $feed_email = 'none';
	public $log_path = '/home/housefinish/public_html/administrator/logs';
	public $tmp_path = '/home/housefinish/public_html/tmp';
	public $lifetime = '15';
	public $session_handler = 'database';
	public $shared_session = '0';
	public $memcache_persist = '1';
	public $memcache_compress = '0';
	public $memcache_server_host = 'localhost';
	public $memcache_server_port = '11211';
	public $memcached_persist = '1';
	public $memcached_compress = '0';
	public $memcached_server_host = 'localhost';
	public $memcached_server_port = '11211';
	public $redis_persist = '1';
	public $redis_server_host = 'localhost';
	public $redis_server_port = '6379';
	public $redis_server_auth = '';
	public $redis_server_db = '0';
	public $proxy_enable = '0';
	public $proxy_host = '';
	public $proxy_port = '';
	public $proxy_user = '';
	public $proxy_pass = '';
	public $massmailoff = '0';
	public $replyto = '';
	public $replytoname = '';
	public $MetaRights = '';
	public $sitename_pagetitles = '1';
	public $force_ssl = '0';
	public $session_memcache_server_host = 'localhost';
	public $session_memcache_server_port = '11211';
	public $session_memcached_server_host = 'localhost';
	public $session_memcached_server_port = '11211';
	public $frontediting = '1';
	public $cookie_domain = '';
	public $cookie_path = '';
	public $asset_id = '1';