//Database
// List of all songs------------>


let LikedList = []
let playlist_List_index =1; // temporary fixed value
let totalPlaylists = 1;

//List conataing all the custom Playlists---------->
let playlist_List = [
    {   name: "AllSongs",
        customList : [
            
            {   
            
                 name : "Sugar",
                 path : "https://firebasestorage.googleapis.com/v0/b/music-player-2f363.appspot.com/o/songs%2Fsugar.mp3?alt=media&token=deea1bad-586c-4835-bf58-69b211597ab8",
                 image : "https://firebasestorage.googleapis.com/v0/b/music-player-2f363.appspot.com/o/images%2Fsugar.jpeg?alt=media&token=b5664fbc-ac9b-413f-9f4b-7dc001bda48e",
                 artist: "Maroon V"
        
            },
            {   
            
                name : "Demons",
                path : "https://firebasestorage.googleapis.com/v0/b/music-player-2f363.appspot.com/o/songs%2Fdemons.mp3?alt=media&token=9d79d6d1-bebf-4376-afa3-59828415a352",
                image : "https://firebasestorage.googleapis.com/v0/b/music-player-2f363.appspot.com/o/images%2Fdemons.jpg?alt=media&token=abf9e3a3-f1fd-41d1-9044-ca7953feab24",
                artist : "Imaine Dragons"
        
           },
            {   
             
            name : "Paris",
            path : "https://firebasestorage.googleapis.com/v0/b/music-player-2f363.appspot.com/o/songs%2Fparis.mp3?alt=media&token=2d5806eb-bf58-4583-9448-1019e8c929b7",
            image : "https://firebasestorage.googleapis.com/v0/b/music-player-2f363.appspot.com/o/images%2Fparis.jpeg?alt=media&token=061a2457-87ce-4eae-8c0f-d26ce7e027ed",
            artist : "The Chainsmokers"
        
            },

            {
                name : "Runaway",
                path : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Songs%2FAURORA%20-%20Runaway%20(Lyrics).mp3?alt=media&token=17081a90-c4a4-4f55-bb65-07e502f02efe",
                image : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Images%2FAURORA%20-%20Runaway%20(Lyrics).png?alt=media&token=d9725561-30e0-4b3d-a2f4-494db48f53db",
                artist : "Aurora"
            },
            {
                name : "Faded",
                path : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Songs%2FAlan%20Walker%20-%20Faded%20(Lyrics).mp3?alt=media&token=624dd0ca-751f-4999-af5d-765e52e1ef50",
                image : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Images%2FAlan%20Walker%20-%20Faded%20(Lyrics).png?alt=media&token=d9f95cf7-142b-4dc8-a25e-cf79f7554143",
                artist : "Alan Walker"
            },
            {
                name : "The Nights",
                path : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Songs%2FAvicii%20-%20The%20Nights%20(Lyrics).mp3?alt=media&token=00f0a69f-08b8-43de-bb54-e64e0779b207",
                image : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Images%2FAvicii%20-%20The%20Nights%20(Lyrics).jpg?alt=media&token=f55e7421-225b-4906-b602-48ca030bd8e1",
                artist : "Avicii"
            },
            {
                name : "How You Like That",
                path : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Songs%2FBLACKPINK%20-%20How%20You%20Like%20That%20(Lyrics).mp3?alt=media&token=98623bf9-f8b0-479d-accb-19a89378c88d",
                image : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Images%2FBLACKPINK%20-%20How%20You%20Like%20That%20(Lyrics).png?alt=media&token=eaaab96b-1de1-466b-8e85-5ca143e12262",
                artist : "Blackpink"
            },
            {
                name : "Havana",
                path : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Songs%2FCamila%20Cabello%20-%20Havana%20(Lyrics)%20ft.%20Young%20Thug.mp3?alt=media&token=31cd1e11-8299-4ed4-93e3-0987b7d86e29",
                image : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Images%2FCamila%20Cabello%20-%20Havana%20(Lyrics)%20ft.%20Young%20Thug.png?alt=media&token=bc0bf5ce-2807-4d0f-a36a-ef1501fd61ad",
                artist : "Camila Cabello"
            },
            {
                name : "Symphony",
                path : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Songs%2FClean%20Bandit%20-%20Symphony%20(Lyrics)%20feat.%20Zara%20Larsson.mp3?alt=media&token=b9782538-6243-48ac-9629-e3a302c2df29",
                image : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Images%2FClean%20Bandit%20-%20Symphony%20(Lyrics)%20feat.%20Zara%20Larsson.png?alt=media&token=557e7a6d-f43e-4e65-85ec-1ef2d4c6ed64",
                artist : "Clean Bandit "
            },
            {
                name : "Levitating",
                path : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Songs%2FDua%20Lipa%20-%20Levitating%20(Lyrics).mp3?alt=media&token=c34d3b4f-dea0-42df-a9ff-2cecd2003b22",
                image : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Images%2FDua%20Lipa%20-%20Levitating%20(Lyrics).png?alt=media&token=71631e21-3510-42f7-8fa4-2d85b5570470",
                artist : "Dua Lipa"
            },
            {
                name : "Thinking Out Loud",
                path : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Songs%2FEd%20Sheeran%20-%20Thinking%20Out%20Loud%20(Lyrics).mp3?alt=media&token=945e21be-13f4-4b59-85be-8e867119e268",
                image : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Images%2FEd%20Sheeran%20-%20Thinking%20Out%20Loud%20(Lyrics).png?alt=media&token=7e13fc48-ad0e-40cc-be55-b33ff2c8cb82",
                artist : "Ed Sheeran"
            },
            {
                name : "Hips Don't Lie",
                path : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Songs%2FHips%20Don't%20Lie%20-%20Shakira%20feat.%20Wyclef%20Jean%20(Lyrics).mp3?alt=media&token=678e212a-6da0-47a9-9aff-07a2eabd8228",
                image : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Images%2FHips%20Don't%20Lie%20-%20Shakira%20feat.%20Wyclef%20Jean%20(Lyrics).jpg?alt=media&token=5f243dd6-1994-434b-b273-a99c519286ed",
                artist : "Shakira"
            },
            {
                name : "Believer",
                path : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Songs%2FImagine%20Dragons%20-%20Believer%20(Lyrics).mp3?alt=media&token=c6f1a889-e4a2-4008-bba9-551bef4d6764",
                image : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Images%2FImagine%20Dragons%20-%20Believer%20(Lyrics).jpg?alt=media&token=ac16d4dd-6b93-4a6f-afc2-849f856e4d92",
                artist : "Imagine Dragons"
            },
            {
                name : "Swalla",
                path : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Songs%2FJason%20Derulo%20-%20Swalla%20(Lyrics)%20feat.%20Nicki%20Minaj%20%26%20Ty%20Dolla%20%24ign.mp3?alt=media&token=6e1fe968-8f64-4087-8b84-e912e05ee1e2",
                image : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Images%2FJason%20Derulo%20-%20Swalla%20(Lyrics)%20feat.%20Nicki%20Minaj%20%26%20Ty%20Dolla%20%24ign.jpg?alt=media&token=928087c2-d5ca-4eb3-94da-0d10d3563556",
                artist : "Jason Derulo"
            },
            {
                name : "Jeena Jeena",
                path : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Songs%2FJeena%20Jeena%20Badlapur%20Lyrics.mp3?alt=media&token=ce751543-d0af-4703-9071-eff859ccd4d9",
                image : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Images%2FJeena%20Jeena%20Badlapur%20Lyrics.jpg?alt=media&token=7772e4b9-0194-42e5-a985-5a5dae6b2f0c",
                artist : "Atif Aslam"
            },
            {
                name : "Love Yourself",
                path : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Songs%2FJustin%20Bieber%20-%20Love%20Yourself%20(Lyrics).mp3?alt=media&token=8bcab712-714c-4def-b736-8cf72a7ca09c",
                image : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Images%2FJustin%20Bieber%20-%20Love%20Yourself%20(Lyrics).png?alt=media&token=9e6ec2a6-a9a7-4c95-8084-90ee7e5915d6",
                artist : "Justin Bieber"
            },
            {
                name : "I Like Me Better",
                path : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Songs%2FLauv%20-%20I%20Like%20Me%20Better%20Lyrics.mp3?alt=media&token=1f2ba36d-15ab-4ddf-b572-28c99a385358",
                image : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Images%2FLauv%20-%20I%20Like%20Me%20Better%20Lyrics.jpg?alt=media&token=a590c37d-901a-4a36-b596-5468bc4cb8ce",
                artist : "Lauv"
            },
            {
                name : "Pehli Nazar Mein",
                path : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Songs%2FLyrics%20Pehli%20Nazar%20Mein%20Full%20Song%20Atif%20Aslam%20Sameer%20Pritam.mp3?alt=media&token=0a11ebae-5a4e-41b0-8297-b3fdfc12614e",
                image : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Images%2FLyrics%20Pehli%20Nazar%20Mein%20Full%20Song%20Atif%20Aslam%20Sameer%20Pritam.jpg?alt=media&token=d28fe5e1-3cc1-4670-8974-3716e56957f2",
                artist : "Atif Aslam Sameer"
            },
            {
                name : "Girls Like You",
                path : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Songs%2FMaroon%205%20-%20Girls%20Like%20You%20(Lyrics)%20ft.%20Cardi%20B.mp3?alt=media&token=cfd601a3-9126-4acc-baaa-a100dbfbbc87",
                image : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Images%2FMaroon%205%20-%20Girls%20Like%20You%20(Lyrics)%20ft.%20Cardi%20B.png?alt=media&token=f7d18e25-8845-45a4-8608-b724dce5295f",
                artist : "Maroon 5"
            },
            {
                name : "Memories",
                path : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Songs%2FMaroon%205%20-%20Memories%20(Lyrics).mp3?alt=media&token=b8d6aeb7-6f49-4dea-879a-52265042a66a",
                image : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Images%2FMaroon%205%20-%20Memories%20(Lyrics).png?alt=media&token=08714453-ba75-4f60-a246-26f0812fb6c8",
                artist : "Maroon 5 "
            },
            {
                name : "Perfect",
                path : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Songs%2FPerfect%20-%20Ed%20Sheeran%20(Lyrics).mp3?alt=media&token=e9f8415b-b186-474f-ae0e-39741e940767",
                image : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Images%2FPerfect%20-%20Ed%20Sheeran%20(Lyrics).jpg?alt=media&token=8dd35f1a-f91c-404c-a247-1bce8c6ae203",
                artist : "Ed Sheeran"
            },
            {
                name : "Raabta",
                path : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Songs%2FRaabta(Kehte%20Hain%20Khuda)%20Lyrics%20-%20Arijit%20SinghAgent%20Vinod.mp3?alt=media&token=7956af8f-bc8b-4f92-aa5e-78a6263e8869",
                image : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Images%2FRaabta(Kehte%20Hain%20Khuda)%20Lyrics%20-%20Arijit%20SinghAgent%20Vinod.jpg?alt=media&token=ae666286-57f4-49e7-9c4e-bfc7a28b7691",
                artist : "Arijit Singh"
            },
            {
                name : "Treat You Better",
                path : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Songs%2FShawn%20Mendes%20-%20Treat%20You%20Better%20(Lyrics).mp3?alt=media&token=a4781f66-93b1-4ef7-9bf0-e53ccd844851",
                image : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Images%2FShawn%20Mendes%20-%20Treat%20You%20Better%20(Lyrics).png?alt=media&token=ff99253a-7fda-44e5-a569-7c0369adbf8d",
                artist : "Shawn Mendes"
            },
            {
                name : "Cheap Thrills",
                path : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Songs%2FSia%20-%20Cheap%20Thrills%20(Lyrics)%20ft.%20Sean%20Paul.mp3?alt=media&token=e701c185-877b-4d89-a2c6-e71cd40d557e",
                image : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Images%2FSia%20-%20Cheap%20Thrills%20(Lyrics)%20ft.%20Sean%20Paul.png?alt=media&token=3bd521cb-3693-476b-b80e-6b6ad42365fd",
                artist : "Sia ft. Sean Paul"
            },
            {
                name : "Closer",
                path : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Songs%2FThe%20Chainsmokers%20-%20Closer%20(Lyrics)%20ft.%20Halsey.mp3?alt=media&token=12615e50-ee92-4177-a8e6-60bc3eee2652",
                image : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Images%2FThe%20Chainsmokers%20-%20Closer%20(Lyrics)%20ft.%20Halsey.jpg?alt=media&token=8f21aa0c-db36-4e0c-b50a-0953b26521f1",
                artist : "The Chainsmokers "
            },
            {
                name : "Hall Of Fame",
                path : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Songs%2FThe%20Script%20-%20Hall%20Of%20Fame%20(Lyrics).mp3?alt=media&token=ac53d4ef-873d-45eb-a083-cab2ec3843a0",
                image : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Images%2FThe%20Script%20-%20Hall%20Of%20Fame%20(Lyrics).jpg?alt=media&token=c5dab838-1d74-4b95-b87f-a0f662ce3b5e",
                artist : "The Script"
            },
            {
                name : "Dance Monkey",
                path : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Songs%2FTones%20and%20I%20-%20Dance%20Monkey%20(Lyrics).mp3?alt=media&token=8bdab2ae-7668-4cd7-953a-58c9e30ac240",
                image : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Images%2FTones%20and%20I%20-%20Dance%20Monkey%20(Lyrics).jpg?alt=media&token=68625e96-eacb-4239-91a1-935008c56244",
                artist : "Tones and I"
            },
            {
                name : "Waka Waka",
                path : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Songs%2FWaka%20Waka%20(This%20Time%20for%20Africa)%20-%20Shakira%20(Lyrics).mp3?alt=media&token=763b9cfd-0795-4831-8103-15381ddd525f",
                image : "https://firebasestorage.googleapis.com/v0/b/music-player-f4a81.appspot.com/o/Images%2FWaka%20Waka%20(This%20Time%20for%20Africa)%20-%20Shakira%20(Lyrics).webp?alt=media&token=ffccdce7-db3c-4855-889e-a182844b4b97",
                artist : "Shakira"
            }
        
            

        ]
    },
    {
        name: "Custom Playlist 1", //index 1
        customList : []
    },
    {
        name: "Custom Playlist 2",
        customList : []
    },
    {
        name: "Custom Playlist 3",
        customList : []
    },
    {
        name: "Custom Playlist 4",
        customList : []
    },    {
        name: "Custom Playlist 5",
        customList : []
    },
    {
        name: "Custom Playlist 6",
        customList : []
    }

]



//Temporary DATABASE ENDS HERE--######################################################################################################
//Temporary DATABASE ENDS HERE--######################################################################################################
//Temporary DATABASE ENDS HERE--######################################################################################################
//Temporary DATABASE ENDS HERE--######################################################################################################





//Selecting all the elements and assigning them variables


let prev_btn = document.querySelector(".next_btn");
let next_btn = document.querySelector(".prev_btn");
let playpause_btn = document.querySelector(".playpause_btn");

let isPlaying = false;
let track_index = 0;
let updateTimer;

let currentTrack = document.createElement("audio");

let songname = document.querySelector(".songname");
let songimg = document.getElementById("songImg");
let songArtist = document.querySelector(".songArtist")
let songby = document.querySelector(".songby");

//Seek and Volume Sliders-----------------------------

let seekSlider = document.querySelector(".seekSlider");
// let volumeSlider = document.querySelector(".volumeSlider");
let currentTime = document.querySelector(".currentTime");
let totalDuration = document.querySelector(".totalDuration");







//Adding songs to list--------------------------------------



for (var listCounter = 0; listCounter < playlist_List[0].customList.length; listCounter++) {
    var l_name = playlist_List[0].customList[listCounter].name;
    var li = document.createElement('li');
    li.innerHTML ='<img id = "thumbnail" src="'+playlist_List[0].customList[listCounter].image+'" height="40em" width="40em" style="border-radius: 5px;">&nbsp;'+l_name+'<button id="btn-'+l_name+'" onClick = "playSongOnClick(this.id)"><i class="fas fa-play fa-2x"></i></button>';  
    document.getElementById('songList').appendChild(li);
}

function updateLikedlist(){

        var listCounter = LikedList.length - 1; 
        var l_name = LikedList[listCounter].name;
        var li = document.createElement('li');
        li.innerHTML = l_name;  
        document.getElementById('likedList').appendChild(li);
    
    }

    function updatePlaylist(){

        var listCounter = playlist_List[playlist_List_index].customList.length - 1; 
        var l_name = playlist_List[playlist_List_index].customList[listCounter].name;
        var li = document.createElement('li');
        li.innerHTML = l_name;  
        document.getElementById(playlist_List_index_name).appendChild(li);
    
    }

    function updateEntirePlaylist(){

    }


//Selecting Playlist--------------------------

function selectPlaylist(){
    currentList = playlist_List[0].customList;
    track_index = 0;
    prevTrack();

}

function playLikedSongs(){
    currentList = LikedList;
    track_index = 0;
    prevTrack();
}

function delLastLikedSong(){
    LikedList.pop();

    let selectLike = document.getElementById("likedList");
     
     selectLike.removeChild(selectLike.lastChild);
     

}


function selectCustomlist(listParameter){
    console.log(listParameter.slice(4,listParameter.length-1));
    
    var playlist_List_index2 = playlist_List.map(function(e) { return e.name; }).indexOf(listParameter.slice(4,listParameter.length-1));
     currentList = playlist_List[playlist_List_index2].customList;
     track_index = 0;
     prevTrack();
}


//Delete Last song from playlists

// function reloadPlaylistData(){

//    let select = document.getElementById(playlist_List[playlist_List_index3].name);
//    while(select.firstChild){
//        select.replaceChild(select.firstChild);
//    }

// }

function deleteLastSong(dellistParameter){
    console.log(dellistParameter.slice(4,dellistParameter.length-1));
    
    var playlist_List_index3 = playlist_List.map(function(e) { return e.name; }).indexOf(dellistParameter.slice(4,dellistParameter.length-1));
     track_index = playlist_List[playlist_List_index3].customList.length-1;
     playlist_List[playlist_List_index3].customList.pop();

     
     let select = document.getElementById(playlist_List[playlist_List_index3].name);
     while(select.firstChild){
         select.removeChild(select.firstChild);
     }

     for (var listCounter = 0; listCounter < playlist_List[playlist_List_index3].customList.length; listCounter++) {
        var l_name = playlist_List[playlist_List_index3].customList[listCounter].name;
        var li3 = document.createElement('li');
        li3.innerHTML = l_name;  
        document.getElementById(playlist_List[playlist_List_index3].name).appendChild(li3);
    }

     updateEntirePlaylist();
}





// updating playlist list index
function getOption() {
    var obj = document.getElementById("playlist_form");
    playlist_List_index_name = obj.options[obj.selectedIndex].text;
  }

// playlist_List_index = playlist_List.map(function(e) { return e.name; }).indexOf(playlist_List_index_name);



// operations----------------------------

function loadTrack(track_index){

    clearInterval(updateTimer);
    resetValues();

    currentTrack.src = currentList[track_index].path;
    currentTrack.load;


    //track details

    updateTimer = setInterval(seekUpdate, 1000);

    //Move to next track

    currentTrack.addEventListener("ended", nextTrack);

    songimg.src = currentList[track_index].image;
    songname.innerHTML = currentList[track_index].name;
    songArtist.innerHTML = currentList[track_index].artist;
    songby.innerHTML = "by&nbsp;";
}


function playPauseTrack() {
    if (!isPlaying) playTrack();
    else pauseTrack();
}

function playTrack(){
    currentTrack.play();
    isPlaying = true;

    playpause_btn.innerHTML = '<i class="fas fa-pause-circle fa-5x"></i>';
}

function pauseTrack(){
    currentTrack.pause();
    isPlaying = false;

    playpause_btn.innerHTML = '<i class="fas fa-play-circle fa-5x"></i>';
}

function nextTrack() {
 
   if (track_index < currentList.length - 1)
   track_index += 1;
   else track_index=0;

   loadTrack(track_index);
   playTrack();
}

function prevTrack() {
    
    if (track_index > 0)
    track_index -= 1;
    else track_index=0;
 
    loadTrack(track_index);
    playTrack();
 }

 function resetValues(){
     currentTime.textContent = "00:00";
     totalDuration.textContent = "00:00";
 }



//Seek Slider Function--------------------->

function seekTo(){
    seekto = currentTrack.duration * ( seekSlider.value / 100);
    currentTrack.currentTime = seekto;
}

function seekUpdate() {
    let seekPosition = 0;

    if (!isNaN(currentTrack.duration)) {
        seekPosition = currentTrack.currentTime * (100 / currentTrack.duration);
        seekSlider.value = seekPosition;
     
        // Calculate the time left and the total duration
        let currentMinutes = Math.floor(currentTrack.currentTime / 60);
        let currentSeconds = Math.floor(currentTrack.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(currentTrack.duration / 60);
        let durationSeconds = Math.floor(currentTrack.duration - durationMinutes * 60);
     
        // Add a zero to the single digit time values
        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
     
        // Display the updated duration
        currentTime.textContent = currentMinutes + ":" + currentSeconds;
        totalDuration.textContent = durationMinutes + ":" + durationSeconds;
    }

}


 //Add to playlist

 var playlist_pointer=0;
function addToPlaylist(){


    playlist_pointer=0;
    getOption();
    playlist_List_index = playlist_List.map(function(e) { return e.name; }).indexOf(playlist_List_index_name);

    playlist_pointer = playlist_List[playlist_List_index].customList.length;
    playlist_List[playlist_List_index].customList[playlist_pointer] = playlist_List[0].customList[track_index];
    
    updatePlaylist();

}


function addToLikedSongs(){


    var playlist_pointer=0;
    playlist_pointer = LikedList.length;
    LikedList[playlist_pointer] = playlist_List[0].customList[track_index];
    updateLikedlist();

}


//Add the created new playlist to options list function---

function addPlaylistOption(){
    var x = document.getElementById("playlist_form");
    var option = document.createElement("option");
    option.text = playlist_List[totalPlaylists].name;
    x.add(option);
}





//Create a new playlist

function createNewPlaylist(){
    
    playlist_List[totalPlaylists].name = prompt("Enter Name for your New Playlist").split(" ").join("-");
    var newNode = document.createElement('div');
    newNode.setAttribute("class", "customlist R2table-cell");

    newNode.innerHTML = '<h2><button class="playlist-btn" id=btn-'+ playlist_List[totalPlaylists].name +'" onclick="selectCustomlist(this.id)"><i class="fas fa-play fa-1x"></i>&nbsp;&nbsp;' +  playlist_List[totalPlaylists].name + '</button></h2><ol id="'+playlist_List[totalPlaylists].name+'"></ol>'+' <button class="rmvbtn playlist-btn" id=rmv-'+ playlist_List[totalPlaylists].name +'" onclick="deleteLastSong(this.id)"><i class="fas fa-trash"></i> Last Song</button>' ;
    document.querySelector('.listContainer').appendChild(newNode);

    document.getElementById("playlistsHere").innerHTML="";

    var newListName = document.createElement("li");
    newListName.innerHTML = playlist_List[totalPlaylists].name + '<button class="playlist-btn" id=btn-'+ playlist_List[totalPlaylists].name +'" onclick="selectCustomlist(this.id)"><i class="fas fa-play fa-2x"></i></button>';
    document.querySelector("#allPlaylistNameList").appendChild(newListName);

    addPlaylistOption();
    totalPlaylists=totalPlaylists+1;
   

}

///Search Bar

let sg_name=playlist_List[0].customList;

const list = document.getElementById('list');
let currentsongV;

function setList(group){
    clearList();
    for(const song of group){
        const item=document.createElement('li');
        const text=document.createTextNode(song.name);
        item.appendChild(text);
        list.appendChild(item);
        item.addEventListener('click',()=>{
            currentsongV=song.name;
            playSearchedSong();
        })
    }
    if(group.length==0){
        setNoResults();
    }
}
function clearList(){
    while(list.firstChild){
        list.removeChild(list.firstChild);
    }
}
function setNoResults(){
        const item=document.createElement('li');
        const text=document.createTextNode('No results found');
        item.appendChild(text);
        list.appendChild(item);
}
function getRelevancy(value,searchTerm){
    if(value===searchTerm){
        return 2;
    }
    else if(value.startsWith(searchTerm)){
    return 1;
    }
    else if(value.includes(searchTerm)){
        return 0;
    }
    else{
        return -1;
    }
}
const searchInput=document.getElementById('search_song');

searchInput.addEventListener('keydown', function(event) {
    const key = event.key; // const {key} = event; ES6+
    if (key === "Backspace" || key === "Delete") {
        clearList();
    }
});
searchInput.addEventListener('input',(event)=>{
    let value = event.target.value;
    if(value && value.trim().length>0)
    {
        value=value.trim().toLowerCase();
        setList(sg_name.filter(sg_name=>{
            return sg_name.name.toLowerCase().includes(value);
        }).sort((personA,personB)=>{
            return getRelevancy(personB.name,value) - getRelevancy(personA.name,value);

        }));
    }
    else{
    }
});


//////------------Play Song from Search Bar-------------------

function playSearchedSong(){

    currentList = playlist_List[0].customList;

    track_index = playlist_List[0].customList.map(function(e) { return e.name; }).indexOf(currentsongV);

    loadTrack(track_index);
    playTrack();



}


//Play a song on click
let track_index_name = "";
function playSongOnClick(track_index_name){

   
        track_index = playlist_List[0].customList.map(function(e) { return e.name; }).indexOf(track_index_name.slice(4,track_index_name.length));

        currentList = playlist_List[0].customList;

        loadTrack(track_index);
        playTrack();
    

}



///-----------------------------------

loadTrack(track_index);


