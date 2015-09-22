function tweetsPerPersonFollowing()
{
	var asdf = $('#stream-items-id li[data-item-type=tweet]'), usernames = [], counts = [], fucks = 0, out = '', i, tmp, count;
	for (i = 0; i < asdf.length; i++)
	{
		tmp = asdf[i].getElementsByClassName("js-retweet-text");

		if (tmp.length != 0)
		{
			tmp = tmp[0].getElementsByTagName("a");
			if (tmp.length == 1)
				usernames.push(tmp[0].href.match(/[^\/]*$/)[0]);
			else
				fucks++;
		}
		else
		{
			tmp = asdf[i].getElementsByTagName("b");
			if (tmp.length > 0)
				usernames.push(tmp[0].innerHTML);
			else
				fucks++;
		}
	}
	if (usernames.length > 0)
	{
		usernames.sort(function(a, b){if (a.toLowerCase() > b.toLowerCase()) return 1;if (a.toLowerCase() < b.toLowerCase()) return -1; return 0;});

		count = {"count":1, "username":usernames[0]};
		for (i = 1; i < usernames.length; i++)
		{
			if (count.username.toLowerCase() == usernames[i].toLowerCase())
			{
				count.count++;
			}
			else
			{
				counts.push(count);
				count = {"count":1, "username":usernames[i]};
			}
		}
		counts.push(count);
		counts.sort(function(a, b){return b.count-a.count;});
		for (i = 0; i < counts.length; i++)
		{
			out = out + counts[i].count + "\t" + counts[i].username + "\r\n";
		}
	}
	if (fucks) // hopefully no fucks given
		alert("fucks: " + fucks + "\n");
	return out;
}
tweetsPerPersonFollowing();
