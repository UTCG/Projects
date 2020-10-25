Let's make a game!

# Week 3: Game Engines
All video games are simulations, and game engines are pieces of technology that help us design, run, and visualize these simulations. This [Wikipedia entry on game engines](https://en.wikipedia.org/wiki/Game_engine) details some of their common components. Game engines like Unity and Unreal are designed to give you a starting point to build any kind of game you can imagine, but other engines include features important to building a specific type of game, like FPS, RTS, or visual novel. The following will get you started in Unity, Unreal, or if you want to build your own game engine. As always, feel free to ask for clarification or additional resources. We're excited to see what you create!

# Unity
* Unity is free for personal use (see [pricing tiers](https://store.unity.com/compare-plans)).
* Unity is suitable for building both 2D and 3D games.
* Unity uses the scripting language C#.

### Getting Started:
* The [Unity Hub](https://unity3d.com/get-unity/download) makes it easy to keep multiple versions of the engine installed.
* First install a version of the engine: In the Installs tab of Unity Hub, add one of the Latest Official Releases.
    * I like using an LTS (long term support) version.
* Then go to the Projects tab to create a new project. Download and select one of the "microgame" templates for a quick and interactive introduction to the engine.
* The Learn tab has more projects and tutorials you can follow.

A great way to learn is to simply imagine something then try creating it. The following links should help, but ask others if you need a hint on where to start.

### Unity resources:
* Here is a 45 minute [Unity introduction stream](https://drive.google.com/file/d/1Tr8-j0lVCvvy_PF2QUH5PfQR4iXEJGAV/view) from the Game Design and Development Club.
* [Unity Learn](https://learn.unity.com/) for official introductory tutorial projects.
* [Brackeys](https://www.youtube.com/user/Brackeys) for video guides on a wide variety of subjects.
* [Sebastian Lague](https://www.youtube.com/c/SebastianLague/playlists) on topics including procedural generation and pathfinding.
* [Catlike Coding](https://catlikecoding.com/unity/tutorials/) on C# and shader programming.
* [Mix and Jam](https://www.youtube.com/channel/UCLyVUwlB_Hahir_VsKkGPIA) on recreating famous game mechanics in Unity.

# Unreal Engine
* Unreal is free for personal use (see [FAQ](https://www.unrealengine.com/en-US/faq)).
* Unreal can be used to build 2D and 3D games, but is far more suited to 3D.
* Unreal uses a visual scripting language called Blueprints along with C++.
    * Most developers use both, but you can go far using only Blueprints.
* The engine can be difficult to run on lower spec computers.

### Getting Started:
* Unreal can be installed on the Unreal Engine tab of the [Epic Games Launcher](https://www.unrealengine.com/en-US/get-now).
* Within the Unreal Engine tab, click the library tab up top and add an engine version.
* Check out the Learn tab for various tutorials and sample projects, like their Action RPG sample game.

### Unreal resources:
* [Unreal Learn](https://www.unrealengine.com/en-US/onlinelearning-courses) hosts a variety of lectures and tutorials.
* [Unreal Engine's YouTube Channel](https://www.youtube.com/c/UnrealEngine/playlists) includes tips, tricks, and developer live streams.
* [Tom Looman's blog](https://www.tomlooman.com/) includes posts on a variety of subjects.
* You'll also want to learn C++. Some of the links on making your own engine below are about this.
* [Advanced mesh processing](http://www.gradientspace.com/tutorials/2020/1/2/libigl-in-unreal-engine) with Unreal Engine and libigl.

# Throwback to previous weeks:
* Week 1 included a segment on git.
    * By default, Unity projects can be troublesome to use with git.
    * [How to Git with Unity](https://thoughtbot.com/blog/how-to-git-with-unity) describes a more optimal setup for using Unity with git.
    * You can use Unreal with git, but it's designed to be used with the Perforce version control system.
* Week 2 focused on Blender.
    * Try making a model, then importing it into Unity Unreal to interact with!

# Making your own engine:
The primary language used in game development and other interactive 3D graphics applications is C++.
* [cplusplus.com](http://cplusplus.com/doc/tutorial/) has written tutorials that introduce the language.
* [Effective C++](https://www.oreilly.com/library/view/effective-c-55/0321334876/) is a great book to improve your C++.
* [The Cherno](https://www.youtube.com/c/TheChernoProject/featured) makes videos on C++ and game engine development.
* [Lazy Foo's Game Programming with SDL tutorials](https://lazyfoo.net/tutorials/SDL/index.php) are designed for C++ programmers who want to move to real time games with graphics.
* [LearnOpenGL.com](https://learnopengl.com/In-Practice/2D-Game/Breakout) features a series of tutorials on building a simple game using C++ and OpenGL.
* [Entity component system](https://en.wikipedia.org/wiki/Entity_component_system) is a software architecture pattern commonly seen in game engines.
* [Game Engine Architecture](https://www.gameenginebook.com/) is a hefty book on building the various systems in game engines.
