var Garrysmod = {};

function GameDetails( servername, serverurl, mapname, maxplayers, steamid, gamemode ) {
	Layout.updateInfo(mapname, gamemode);
}

function DownloadingFile( fileName ) {
	Layout.updateStatus("Downloading files");
}

function SetStatusChanged( status ) {
	status = status.replace("#", "");
	status = status.replace("...", "");

	Layout.updateStatus(status);
}