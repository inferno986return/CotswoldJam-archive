<HTML><HEAD>
<TITLE>Tutorial array test</TITLE>
</HEAD><BODY>

<H1>Tutorial Workshops for Raspberry Pi</H2>

<P STYLE="margin-bottom:0px;">Click any tag to filter the list:
<p id="list" style="margin-top:0px;">(enable Javascript for tags)</p>

<SCRIPT LANGUAGE=JAVASCRIPT SRC="tutorials-data.js"></SCRIPT>
<SCRIPT LANGUAGE=JAVASCRIPT><!--
taglist=new Array();
for (var i=0; i<tutorial.length; i++) {
  tutorial[i].tags.sort();
  for (var j=0; j<tutorial[i].tags.length; j++) {
    if ( taglist.indexOf( tutorial[i].tags[j] ) < 0 ) {
      taglist.push(tutorial[i].tags[j]);
    }
  }
}
taglist.sort();
mytags=new Array();
var query=window.location.search.substring(1).split("&")
for (var i=0; i<query.length; i++) {
  pair=query[i].split("=");
  if (pair[0]=="tags") {
    thistag=pair[1].replace("%2C",",").split(",");
    for (var j=0; j<thistag.length; j++) {
      mytags.push(thistag[j]);
    }
  }
}

function enable_tag(tagname)
{
  if ( mytags.indexOf(tagname)<0 ) {
    mytags.push(tagname);
  }
  refresh_list();
}

function disable_tag(tagname)
{
  i=mytags.indexOf(tagname);
  if ( i>=0 ) {
    mytags.splice(i,1);
  }
  refresh_list();
}

function refresh_list()
{
  liststr="";

  for (var i=0; i<taglist.length; i++) {
    if ( mytags.indexOf(taglist[i]) < 0 ) {
      liststr=liststr+"<DIV STYLE=\"display:inline-block; cursor:pointer; background-color: #FFA0A0; padding-left:4px; padding-right:4px;\" ONCLICK=\"enable_tag('"+taglist[i]+"');\">&#10007 ";
    } else {
      liststr=liststr+"<DIV STYLE=\"display:inline-block; cursor:pointer; background-color: #A0A0FF; padding-left:4px; padding-right:4px;\" ONCLICK=\"disable_tag('"+taglist[i]+"');\">&#10003 ";
    }
    liststr=liststr+taglist[i]+"</DIV> ";
  }
  
  for (var i=0; i<tutorial.length; i++) {
    matchedtags=0;
    sectionstr="<P><A HREF=\""+tutorial[i].URL+"\">"+tutorial[i].name+"</A> ("+tutorial[i].date.toLocaleDateString()+")" ;
    sectionstr=sectionstr+"<BR><I>Tags: ";
    for (var j=0; j<tutorial[i].tags.length; j++) {
      if ( mytags.indexOf(tutorial[i].tags[j]) >=0 ) {
        matchedtags++;
      }
      sectionstr=sectionstr+( tutorial[i].tags[j] );
      if ( j<tutorial[i].tags.length-1 ) {
        sectionstr=sectionstr+"; ";
      } else {
        sectionstr=sectionstr+"</I>";
      }
    }
    if ( matchedtags==mytags.length ) {
      liststr=liststr+sectionstr+"<BR>"+tutorial[i].descr+"\n";
    }
  }
  document.getElementById("list").innerHTML=liststr;
}

refresh_list();
  
//--></SCRIPT>
