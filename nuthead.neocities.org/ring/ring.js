(function(){
    function createImgLink(url, imageUrl, hint) {
        var anchor = document.createElement('a');
        var img = document.createElement('img');
        anchor.href = url;
        img.src = imageUrl;
        img.alt = hint;
        anchor.append(img);
        return anchor;
    }
    function parseUrlEncoded(s) {
        return s.split('&').reduce(function(a, x){
            var pair = x.split('=');
            if(pair.length < 2){
                a[pair[0]] = true;
            } else {
                a[pair[0]] = decodeURIComponent(pair[1]);
            }
            return a;
        }, {});
    }
    var prevLinkImage = 'https://nuthead.neocities.org/ring/prev.png';
    var nextLinkImage = 'https://nuthead.neocities.org/ring/next.png';
    var logoLinkImage = 'https://nuthead.neocities.org/ring/logo32.png';
    /* parse options passed via src tag */
    if(document.currentScript.src.indexOf('?') != -1){
        var params = parseUrlEncoded(document.currentScript.src.split('?')[1]);
        if(params.prev){ prevLinkImage = params.prev; }
        if(params.next){ nextLinkImage = params.next; }
        if(params.logo){ logoLinkImage = params.logo; }
    }
    /* populate sites array and find current */
    var sites = [];
    
    sites.push("nuthead.neocities.org");
    
    sites.push("ake.neocities.org");
    
    sites.push("websitering.neocities.org");
    
    sites.push("stationsquare.neocities.org");
    
    sites.push("tehleroy.neocities.org");
    
    sites.push("upallnight.wtf");
    
    sites.push("potassiummcr2.neocities.org");
    
    sites.push("cultureclub.neocities.org");
    
    sites.push("minerobber.neocities.org");
    
    sites.push("charliemartinez.neocities.org");
    
    sites.push("bullwinkle.neocities.org");
    
    sites.push("humanraccoon.neocities.org");
    
    sites.push("lykakspars.neocities.org");
    
    sites.push("nostalgic.neocities.org");
    
    sites.push("modernxp.neocities.org");
    
    sites.push("billsworld.neocities.org");
    
    sites.push("madville.neocities.org");
    
    sites.push("personally-comfy.net");
    
    sites.push("scifirenegade.neocities.org");
    
    sites.push("eggramen.neocities.org");
    
    sites.push("itsyaboypedro.neocities.org");
    
    sites.push("xyzzyzzyzx.neocities.org");
    
    sites.push("butterfly42.neocities.org");
    
    sites.push("madboi214.neocities.org");
    
    sites.push("polophylax.neocities.org");
    
    sites.push("bytemoth.neocities.org");
    
    sites.push("mystsaphyr.me");
    
    sites.push("joellmadrid.neocities.org");
    
    sites.push("missmoss.neocities.org");
    
    sites.push("keysklubhouse.com");
    
    sites.push("theki.club");
    
    sites.push("cadnomori.neocities.org");
    
    sites.push("vampirecore.neocities.org");
    
    sites.push("droneriot.neocities.org");
    
    sites.push("mews.neocities.org");
    
    sites.push("quartzosc-chip.neocities.org");
    
    sites.push("biebersoft.neocities.org");
    
    sites.push("pixele.neocities.org");
    
    sites.push("lockdownlua.neocities.org");
    
    sites.push("sniped64.neocities.org");
    
    sites.push("mousiewouse.neocities.org");
    
    sites.push("nightmarefantasmic.neocities.org");
    
    sites.push("thedigitalme.neocities.org");
    
    sites.push("omfg.neocities.org");
    
    sites.push("machine-cat.neocities.org");
    
    sites.push("alicode1111.neocities.org");
    
    sites.push("pikiwediaa.neocities.org");
    
    sites.push("iosion.neocities.org");
    
    sites.push("laurasthings.neocities.org");
    
    sites.push("adeleine.neocities.org");
    
    sites.push("purplehello98.neocities.org");
    
    sites.push("catcatproductions.com");
    
    sites.push("segasonicwebsite.neocities.org");
    
    sites.push("soulmaze.neocities.org");
    
    sites.push("atomicgothic.neocities.org");
    
    sites.push("vannania.neocities.org");
    
    sites.push("wholelottabetsy.neocities.org");
    
    sites.push("grizzlyganja.neocities.org");
    
    sites.push("zekiisnook.neocities.org");
    
    sites.push("kuru.neocities.org/");
    
    sites.push("valvast.neocities.org");
    
    sites.push("nailgun.neocities.org");
    
    sites.push("pouchedrat.neocities.org");
    
    sites.push("swf386.neocities.org");
    
    sites.push("toxoplasicity.neocities.org");
    
    sites.push("sbeve.neocities.org");
    
    sites.push("erinbern.neocities.org");
    
    sites.push("411.neocities.org");
    
    sites.push("the-simple-site.neocities.org");
    
    sites.push("nyanboo.neocities.org");
    
    sites.push("vweb.neocities.org");
    
    sites.push("basedworld.neocities.org");
    
    sites.push("gendercute.neocities.org");
    
    sites.push("lataccola.neocities.org");
    
    sites.push("grimnephelim.neocities.org");
    
    sites.push("anti-hero.net");
    
    sites.push("roly.neocities.org");
    
    sites.push("kafkapolis.neocities.org");
    
    sites.push("unhumans.neocities.org");
    
    sites.push("buildbook.neocities.org");
    
    sites.push("theskysofnow.neocities.org");
    
    sites.push("blackreach.neocities.org");
    
    sites.push("ouija.fun");
    
    sites.push("ophanimkei.com");
    
    sites.push("erri.neocities.org");
    
    sites.push("ratpilled.neocities.org");
    
    sites.push("nostalgia-planet.neocities.org");
    
    sites.push("sheepboy.neocities.org");
    
    sites.push("linkyblog.neocities.org");
    
    sites.push("cobradile.neocities.org");
    
    sites.push("cdps.neocities.org");
    
    sites.push("c04x14l.net");
    
    sites.push("covid2009.neocities.org");
    
    sites.push("billygoat891.neocities.org");
    
    sites.push("endromeda.neocities.org");
    
    sites.push("fidgetsinner.neocities.org");
    
    sites.push("silaseacret.neocities.org");
    
    sites.push("rosiesworld.neocities.org");
    
    sites.push("blinchik.neocities.org");
    
    sites.push("tsukimi.neocities.org");
    
    sites.push("deluxesb.neocities.org");
    
    sites.push("untitledblog.neocities.org");
    
    sites.push("retrokid.neocities.org");
    
    sites.push("mirages.neocities.org");
    
    sites.push("lenney.neocities.org");
    
    sites.push("clatto.neocities.org");
    
    sites.push("mizunotic.neocities.org");
    
    sites.push("blaisedebeste.neocities.org");
    
    sites.push("chamaedaphne.neocities.org");
    
    sites.push("suntooth.neocities.org");
    
    sites.push("onewatch.neocities.org");
    
    sites.push("obspogon.neocities.org");
    
    sites.push("feskvulpse.neocities.org");
    
    sites.push("the-enigma.neocities.org");
    
    sites.push("bagungus.neocities.org");
    
    sites.push("lime360.neocities.org");
    
    sites.push("retroworld95.neocities.org");
    
    sites.push("csrainbow.neocities.org");
    
    sites.push("walkx.neocities.org");
    
    sites.push("vukky.net");
    
    sites.push("kielljoy.neocities.org");
    
    sites.push("temaisgame.neocities.org");
    
    sites.push("graystea.neocities.org");
    
    sites.push("trebleknight.neocities.org");
    
    sites.push("sugarteara.moe");
    
    sites.push("moll.neocities.org");
    
    sites.push("rotten1rainbow508.neocities.org");
    
    sites.push("mediastrider.neocities.org");
    
    sites.push("000010.neocities.org");
    
    sites.push("displayman.neocities.org");
    
    sites.push("bisuko.neocities.org");
    
    sites.push("rozariosanguinem.neocities.org");
    
    sites.push("devilboy.neocities.org");
    
    sites.push("leijiverse.neocities.org");
    
    sites.push("hummusandfungus.neocities.org");
    
    sites.push("kitkatscodecorner.xyz");
    
    sites.push("44nifty.com");
    
    sites.push("iyalou.neocities.org");
    
    sites.push("warpzone.site");
    
    sites.push("odditycommoddity.neocities.org");
    
    sites.push("skidzone.neocities.org");
    
    sites.push("power-stomp.neocities.org");
    
    sites.push("okayrelax.neocities.org");
    
    sites.push("irkeneon.neocities.org");
    
    sites.push("blagi.neocities.org");
    
    sites.push("humantooth.neocities.org");
    
    sites.push("gl12.org");
    
    sites.push("divergentrays.com");
    
    sites.push("entangled-lydian-pleonasm.neocities.org");
    
    sites.push("e0x0e0.neocities.org");
    
    sites.push("morrowseer.neocities.org");
    
    sites.push("personontheinternet.neocities.org");
    
    sites.push("thevold.neocities.org");
    
    sites.push("tfpxe.wtf");
    
    sites.push("verbina29.neocities.org");
    
    sites.push("outono96.neocities.org");
    
    sites.push("xxang3l-0f-d4rknezzxx.neocities.org");
    
    sites.push("bodhisattva.neocities.org");
    
    sites.push("milfgod.net");
    
    sites.push("retroinsect.neocities.org");
    
    sites.push("josef.neocities.org");
    
    sites.push("1337nightbug.neocities.org");
    
    sites.push("skykristal.art");
    
    sites.push("flutteristhebest.neocities.org");
    
    sites.push("bibi.gl12.org");
    
    sites.push("aiston.neocities.org");
    
    sites.push("cyberspacegf.neocities.org");
    
    sites.push("elucidatedvoyyd.neocities.org");
    
    sites.push("wirescarryingme.neocities.org");
    
    sites.push("expectationemesis.net");
    
    sites.push("cephalon7000.neocities.org");
    
    sites.push("paz01997.neocities.org");
    
    sites.push("vibracobra.net");
    
    sites.push("teethkid67.neocities.org");
    
    sites.push("teomodo.neocities.org");
    
    sites.push("telepoet.neocities.org");
    
    sites.push("leanneu.neocities.org");
    
    sites.push("conallia.neocities.org");
    
    sites.push("arandomsite.neocities.org");
    
    sites.push("rarimena.neocities.org");
    
    sites.push("rampancy.neocities.org");
    
    sites.push("friday-girl.neocities.org");
    
    sites.push("gogogal.online");
    
    sites.push("jjharley.co.uk");
    
    sites.push("barbatus.neocities.org");
    
    sites.push("atking.neocities.org");
    
    sites.push("fusorlabs.neocities.org");
    
    sites.push("lambprincess.neocities.org");
    
    sites.push("95revive.neocities.org");
    
    sites.push("2askew.neocities.org");
    
    sites.push("pklucky.neocities.org");
    
    sites.push("pixelglade.net");
    
    sites.push("controlcoreangel.neocities.org");
    
    sites.push("solradguy.neocities.org");
    
    sites.push("sakokomii.neocities.org");
    
    sites.push("braigwen.neocities.org");
    
    sites.push("internautica.neocities.org");
    
    sites.push("dori4n.neocities.org");
    
    sites.push("oscarstars.neocities.org");
    
    sites.push("lydwim.neocities.org");
    
    sites.push("wetnoodle.neocities.org");
    
    sites.push("lost-angles.neocities.org");
    
    sites.push("welcometolaplace.net");
    
    sites.push("beebfreeb.neocities.org");
    
    sites.push("beak-tama.art");
    
    sites.push("candyjam.neocities.org");
    
    sites.push("wolf-on-the-web.neocities.org");
    
    sites.push("sethric.neocities.org");
    
    sites.push("dabric.neocities.org");
    
    sites.push("splattacks.neocities.org");
    
    sites.push("luvfromme.neocities.org");
    
    sites.push("kimochiidango.neocities.org");
    
    sites.push("lordalex.neocities.org");
    
    sites.push("jackalhearts.neocities.org");
    
    sites.push("antiquechair.neocities.org");
    
    sites.push("daximus.site");
    
    sites.push("amriel.neocities.org");
    
    sites.push("paintkiller.neocities.org");
    
    sites.push("myblace.one");
    
    sites.push("heck.computer");
    
    sites.push("redrevelry.neocities.org");
    
    sites.push("vastrecs.neocities.org");
    
    sites.push("nerdlegend.neocities.org");
    
    sites.push("kingstudios.neocities.org");
    
    sites.push("agentkaz.com");
    
    sites.push("laikacore.neocities.org");
    
    sites.push("wardof.neocities.org");
    
    sites.push("voliol.neocities.org");
    
    sites.push("hopeslair.neocities.org");
    
    sites.push("foxbite.neocities.org");
    
    sites.push("54547623944.net");
    
    sites.push("3811475.net");
    
    sites.push("theawesometeg219.neocities.org");
    
    sites.push("arezg.neocities.org");
    
    sites.push("lexapr0.neocities.org");
    
    sites.push("skyboxes.fun");
    
    sites.push("ackasi.neocities.org");
    
    sites.push("cadeion.neocities.org");
    
    sites.push("sephiria.com");
    
    sites.push("vaultofsky.neocities.org");
    
    sites.push("yurievinstitute.org");
    
    sites.push("fille-de-pierrot.neocities.org");
    
    sites.push("thebbydove.neocities.org");
    
    sites.push("giraffesite.neocities.org");
    
    sites.push("eversoul.neocities.org");
    
    sites.push("underground-apples.neocities.org");
    
    sites.push("gutz-nd-teeth.neocities.org");
    
    sites.push("key404.neocities.org");
    
    sites.push("virtuagirl.neocities.org");
    
    sites.push("ruili.neocities.org");
    
    sites.push("websterz-corner.neocities.org");
    
    sites.push("objectum-media.neocities.org/");
    
    sites.push("colorfulwonders.neocities.org");
    
    sites.push("mycie.neocities.org");
    
    sites.push("theabsoluterealm.com");
    
    sites.push("sioned.neocities.org");
    
    sites.push("wormworld.neocities.org");
    
    sites.push("vanillian.com");
    
    sites.push("aleksei.neocities.org");
    
    sites.push("messienoobie.neocities.org");
    
    sites.push("onemillionfurries.com");
    
    sites.push("themby.neocities.org");
    
    sites.push("webpage1990colourised.neocities.org");
    
    sites.push("rayna.ooo");
    
    sites.push("catcircuit.neocities.org");
    
    sites.push("cre3p.neocities.org");
    
    sites.push("melonmedia.neocities.org");
    
    sites.push("hardmachine.neocities.org");
    
    sites.push("novaentertainment.neocities.org");
    
    sites.push("doctordizzy.space");
    
    sites.push("killing-machine.neocities.org");
    
    sites.push("bebetcy.neocities.org");
    
    sites.push("brown-seeded-bread.neocities.org");
    
    sites.push("baphomets.neocities.org");
    
    sites.push("iodine-cat.neocities.org");
    
    sites.push("audball.neocities.org");
    
    sites.push("rgnd.neocities.org");
    
    sites.push("soulbyte.neocities.org");
    
    sites.push("bucket-of-bee-milk.neocities.org");
    
    sites.push("lucas-dream-world.neocities.org");
    
    sites.push("fennaixelphox.neocities.org");
    
    sites.push("lostletters.neocities.org");
    
    sites.push("glitterink.neocities.org");
    
    sites.push("themikupretender.neocities.org");
    
    sites.push("emocowboy.neocities.org");
    
    sites.push("netscapenavigatorrevival.neocities.org");
    
    sites.push("reduxflakes.neocities.org");
    
    sites.push("sharkcat.neocities.org");
    
    sites.push("wunjotheork.neocities.org");
    
    sites.push("lizardinvelvetgloves.neocities.org");
    
    sites.push("mantaray.neocities.org");
    
    sites.push("4o4.au");
    
    sites.push("lypsy.neocities.org");
    
    sites.push("knightsofgaia.neocities.org");
    
    sites.push("oskar12354.neocities.org");
    
    sites.push("jeji.neocities.org");
    
    sites.push("nenrikido.neocities.org");
    
    sites.push("karro.neocities.org");
    
    sites.push("jaysplace.neocities.org");
    
    sites.push("baileylockheart.neocities.org");
    
    sites.push("halcybutton.neocities.org");
    
    sites.push("paupowpow.neocities.org");
    
    sites.push("oodlecat.neocities.org");
    
    sites.push("causeistayedaway.neocities.org");
    
    sites.push("niftowshp.neocities.org");
    
    sites.push("netfind.neocities.org");
    
    sites.push("markverb1.neocities.org");
    
    sites.push("shwintykat.neocities.org");
    
    sites.push("thenothingmonster.neocities.org");
    
    sites.push("meowco.neocities.org");
    
    sites.push("popcorb.neocities.org");
    
    sites.push("waxynwane.neocities.org");
    
    sites.push("space-bar.neocities.org");
    
    sites.push("mr-pibbs-site.neocities.org");
    
    sites.push("avenue.neocities.org");
    
    sites.push("meowii.neocities.org");
    
    sites.push("scottosworld.neocities.org");
    
    sites.push("taterinx.neocities.org");
    
    sites.push("rdusuper8.neocities.org");
    
    sites.push("a0i.neocities.org");
    
    sites.push("twilightpentagram.neocities.org");
    
    sites.push("orion-overdrive.neocities.org");
    
    sites.push("meadowlark.live");
    
    sites.push("fr1234.neocities.org");
    
    sites.push("1lettert.neocities.org");
    
    sites.push("nekromant.neocities.org");
    
    sites.push("meixins.neocities.org");
    
    sites.push("philia995.neocities.org");
    
    sites.push("iyoxh.neocities.org");
    
    sites.push("hollenreiter.neocities.org");
    
    sites.push("eigenvoid.neocities.org");
    
    sites.push("crashtestdummy.neocities.org");
    
    sites.push("fri11s.neocities.org");
    
    sites.push("strawberry-gashes.neocities.org");
    
    sites.push("justin-myhead.neocities.org");
    
    sites.push("superkirbylover.neocities.org");
    
    sites.push("zj.neocities.org");
    
    sites.push("soop.neocities.org");
    
    sites.push("tempest-time.neocities.org");
    
    sites.push("unapothecary.neocities.org");
    
    sites.push("heapstuff.neocities.org");
    
    sites.push("cobyzaby.neocities.org");
    
    sites.push("harmonslashcassie.neocities.org");
    
    sites.push("shadowfae.neocities.org");
    
    sites.push("humdrum-oracle.neocities.org");
    
    sites.push("kornloser.neocities.org");
    
    sites.push("michealtheratz.neocities.org");
    
    sites.push("rob64bits.neocities.org");
    
    sites.push("pixelsafari.neocities.org");
    
    sites.push("strwbrry.neocities.org");
    
    sites.push("nikolidae.neocities.org");
    
    sites.push("milkam.neocities.org");
    
    sites.push("sapero.neocities.org");
    
    sites.push("much-ado-about-everything.neocities.org");
    
    sites.push("whiteheartrainbowsoul.neocities.org");
    
    sites.push("yapi.lol");
    
    sites.push("jeltus.neocities.org");
    
    sites.push("helv.neocities.org");
    
    sites.push("kirkmania.neocities.org");
    
    sites.push("lisagaming.neocities.org");
    
    sites.push("earthtoariadne.com");
    
    sites.push("nickminick.neocities.org");
    
    sites.push("savelius.neocities.org");
    
    sites.push("lemonbaskets.neocities.org");
    
    sites.push("koboldwizard.neocities.org");
    
    sites.push("elliots.space");
    
    sites.push("theaio.neocities.org");
    
    sites.push("tenbrackets.neocities.org");
    
    sites.push("cajecks-lair.neocities.org");
    
    sites.push("punkwasp.neocities.org");
    
    sites.push("spookoku.neocities.org");
    
    sites.push("goofysillygoober.neocities.org");
    
    sites.push("bonkiscoolsite.neocities.org");
    
    sites.push("sorbetshrub.neocities.org");
    
    sites.push("daedrms.neocities.org");
    
    sites.push("1dkreally.neocities.org");
    
    sites.push("pinkvampyr.neocities.org");
    
    sites.push("grinalbi.neocities.org");
    
    sites.push("tripixel.neocities.org");
    
    sites.push("nimiria.neocities.org");
    
    sites.push("kittysunshine.neocities.org");
    
    sites.push("planity.neocities.org");
    
    sites.push("morime.gay");
    
    sites.push("amorphophalex.neocities.org");
    
    sites.push("bluescreening.neocities.org");
    
    sites.push("lychee-bear.neocities.org");
    
    sites.push("veyther.neocities.org");
    
    sites.push("wasongo.art");
    
    sites.push("andou.gay");
    
    sites.push("s4t1nr1bb0nz.neocities.org");
    
    sites.push("vsitante.neocities.org");
    
    sites.push("ouroboreas.neocities.org");
    
    sites.push("brownieeecoco.neocities.org");
    
    sites.push("weenlickers.neocities.org");
    
    sites.push("glassyhouse.neocities.org");
    
    sites.push("flowingleaves.neocities.org");
    
    sites.push("poetofu.neocities.org");
    
    sites.push("enter-the-sevenfold.neocities.org");
    
    sites.push("trick-916.neocities.org");
    
    sites.push("emmabelotti.neocities.org");
    
    sites.push("theredlumas2.neocities.org");
    
    sites.push("twansgendew.net");
    
    sites.push("varchar.neocities.org");
    
    sites.push("klomfel.neocities.org");
    
    sites.push("grlrot.neocities.org");
    
    sites.push("mandarin.neocities.org");
    
    sites.push("nuko-sillycorner.neocities.org");
    
    sites.push("cazzysmith.neocities.org");
    
    sites.push("faegardens333.neocities.org");
    
    sites.push("foofoai.neocities.org");
    
    sites.push("bluetails.neocities.org");
    
    sites.push("tsuinosora.neocities.org");
    
    sites.push("natrix.space");
    
    sites.push("kurothelynx.neocities.org");
    
    sites.push("crisis.city");
    
    sites.push("shinyexe.neocities.org");
    
    sites.push("shoutmon.neocities.org");
    
    sites.push("machines2love.neocities.org");
    
    sites.push("lules-oddities.neocities.org");
    
    sites.push("trinityexe.neocities.org");
    
    sites.push("healchan.neocities.org");
    
    sites.push("rebster3000.neocities.org");
    
    sites.push("bluesharkslime.neocities.org");
    
    sites.push("thatoddhaystack.neocities.org");
    
    sites.push("mossdarling.neocities.org");
    
    sites.push("radiationcat.neocities.org");
    
    sites.push("magneticdogz.neocities.org");
    
    sites.push("naico.neocities.org");
    
    sites.push("heimao-tingzi.neocities.org");
    
    sites.push("zoneoffun.neocities.org");
    
    sites.push("hiddenterminal.neocities.org");
    
    sites.push("nork.neocities.org");
    
    sites.push("freespeechwebring.neocities.org");
    
    sites.push("noctowl.neocities.org");
    
    sites.push("wlodekm.neocities.org");
    
    sites.push("authen.neocities.org");
    
    sites.push("2seaters.neocities.org");
    
    sites.push("pizzacatdelights.neocities.org");
    
    sites.push("femboyfinder.neocities.org");
    
    sites.push("nekonokuni.neocities.org");
    
    sites.push("fin600.neocities.org");
    
    sites.push("visagemsc.neocities.org");
    
    sites.push("asteromorph.neocities.org");
    
    sites.push("cosmosfox.neocities.org");
    
    sites.push("f3r4l-c4tg1rl.neocities.org");
    
    sites.push("serenegecko.neocities.org");
    
    sites.push("cloudydusk.neocities.org");
    
    sites.push("scii.neocities.org");
    
    sites.push("kigurumi.neocities.org");
    
    sites.push("nonkiru.art");
    
    sites.push("were.monster");
    
    sites.push("thepasteldyke.neocities.org");
    
    sites.push("forks.neocities.org");
    
    sites.push("tonycooldev.neocities.org");
    
    sites.push("nergal-corp.neocities.org");
    
    sites.push("verns.world");
    
    sites.push("nefritvel.neocities.org");
    
    sites.push("buntsukim.neocities.org");
    
    sites.push("bigtub.neocities.org");
    
    sites.push("screamingegg.neocities.org");
    
    sites.push("zeb-dev.neocities.org");
    
    sites.push("colortraks.net");
    
    sites.push("subspaceember.neocities.org");
    
    sites.push("nicolasperez.neocities.org");
    
    sites.push("werewolfdaddy.neocities.org");
    
    sites.push("lapislabel.net");
    
    sites.push("madeinv.neocities.org");
    
    sites.push("angelribs.neocities.org");
    
    sites.push("jori.neocities.org");
    
    sites.push("nork2004.neocities.org");
    
    sites.push("kwii.neocities.org");
    
    sites.push("coeurl.neocities.org");
    
    sites.push("kiwimeowo.neocities.org");
    
    sites.push("rotaryphoney.neocities.org");
    
    sites.push("spacetroll.neocities.org");
    
    sites.push("code-cafe.neocities.org");
    
    sites.push("bonesdale.neocities.org");
    
    sites.push("puppyluv.neocities.org");
    
    sites.push("honeybread.neocities.org");
    
    sites.push("spectres.neocities.org");
    
    sites.push("sapphic-cafe.neocities.org");
    
    sites.push("mewglitch.neocities.org");
    
    sites.push("wrender.neocities.org");
    
    sites.push("joshisking.neocities.org");
    
    sites.push("a-quiet-room.neocities.org");
    
    sites.push("highcloudquintet.neocities.org");
    
    sites.push("ikaroll.neocities.org");
    
    sites.push("lukaszone.neocities.org");
    
    sites.push("hivemindmoshpit.neocities.org");
    
    sites.push("maria.town");
    
    sites.push("scottisite.neocities.org");
    
    sites.push("117.zone");
    
    sites.push("cerealandchoccymilk.neocities.org");
    
    sites.push("k-cottonears.neocities.org");
    
    sites.push("lostpages.neocities.org");
    
    sites.push("goooby.neocities.org");
    
    sites.push("ttaxyy.neocities.org");
    
    sites.push("lobre.neocities.org");
    
    sites.push("kszmsk.neocities.org");
    
    sites.push("octopen.neocities.org");
    
    sites.push("lopster.neocities.org");
    
    sites.push("anticharisma.neocities.org");
    
    sites.push("rabbitgambit.neocities.org");
    
    sites.push("al-the-raven.neocities.org");
    
    sites.push("plourples.com");
    
    sites.push("manyface.neocities.org");
    
    sites.push("beowulfe.neocities.org");
    
    sites.push("glassheart.neocities.org");
    
    sites.push("norisowl.neocities.org");
    
    sites.push("oerrorpage.neocities.org");
    
    sites.push("milkteamoon.neocities.org");
    
    sites.push("doctorrosalia.neocities.org");
    
    sites.push("lexiq.neocities.org");
    
    sites.push("bonics.neocities.org");
    
    sites.push("hijpixel.neocities.org");
    
    sites.push("colekaidos.neocities.org");
    
    sites.push("miiiiilk.neocities.org");
    
    sites.push("hellacool.neocities.org");
    
    sites.push("glitchy404.neocities.org");
    
    sites.push("veggiegirl.neocities.org");
    
    sites.push("ridvenge.neocities.org");
    
    sites.push("artemisw.neocities.org");
    
    sites.push("itsbunno.neocities.org");
    
    sites.push("n-has-a-site.neocities.org");
    
    sites.push("gayvampire.neocities.org");
    
    sites.push("stax.neocities.org");
    
    sites.push("milkyway.moe");
    
    sites.push("tiredsoul.neocities.org");
    
    sites.push("digitamerriley.neocities.org");
    
    sites.push("ashhmillr.neocities.org");
    
    sites.push("epic1.neocities.org");
    
    sites.push("furbee.neocities.org");
    
    sites.push("kesterite.neocities.org");
    
    sites.push("deep-freezer.neocities.org");
    
    sites.push("krokodil.neocities.org");
    
    sites.push("celli.neocities.org");
    
    sites.push("podminton.neocities.org");
    
    sites.push("junforme.com");
    
    sites.push("gradientos.neocities.org");
    
    sites.push("blahajcool.neocities.org");
    
    sites.push("bruisedgh0st.neocities.org");
    
    sites.push("leap123.neocities.org");
    
    sites.push("jeansgurl98.neocities.org");
    
    sites.push("antiamorous.neocities.org");
    
    sites.push("myrrh.neocities.org");
    
    sites.push("melxncholyman.neocities.org");
    
    sites.push("fructisfans.neocities.org");
    
    sites.push("nullcell.neocities.org");
    
    sites.push("xixxii.neocities.org");
    
    sites.push("moontoast.neocities.org");
    
    sites.push("numericalargo.neocities.org");
    
    sites.push("literallyfictional.neocities.org");
    
    sites.push("hiddenwebpage.neocities.org");
    
    sites.push("happymonkey.neocities.org");
    
    sites.push("reinlibrary.neocities.org");
    
    sites.push("updown.city");
    
    sites.push("unit00.neocities.org");
    
    sites.push("silvernskye.neocities.org");
    
    sites.push("omaemona.neocities.org");
    
    sites.push("robkies.neocities.org");
    
    sites.push("melancholic-entrails.neocities.org");
    
    sites.push("mspaintdemon.neocities.org");
    
    sites.push("dariusaur.neocities.org");
    
    sites.push("appsirgames.neocities.org");
    
    sites.push("vgiamp10.neocities.org");
    
    sites.push("byrdseed.neocities.org");
    
    sites.push("kubikill.neocities.org");
    
    sites.push("pianobonds.neocities.org");
    
    sites.push("petrapixel.neocities.org");
    
    sites.push("darkendstars.neocities.org");
    
    sites.push("moonlightmyopia.neocities.org");
    
    sites.push("seacatgirls.neocities.org");
    
    sites.push("indigocrystals.neocities.org");
    
    sites.push("ranjam.neocities.org");
    
    sites.push("pastaaa1.neocities.org");
    
    sites.push("chaoticdreamz.neocities.org");
    
    sites.push("prowlingleather.neocities.org");
    
    sites.push("vaerael.neocities.org");
    
    sites.push("fragmentedsand.neocities.org");
    
    sites.push("chordata.neocities.org");
    
    sites.push("sclptures.neocities.org");
    
    sites.push("shalashaska.neocities.org");
    
    sites.push("boatemhq.neocities.org");
    
    sites.push("carajo.neocities.org");
    
    sites.push("macabreexude.neocities.org");
    
    sites.push("randomnessisinsanity.neocities.org");
    
    sites.push("homepc.neocities.org");
    
    sites.push("lakebed.neocities.org");
    
    sites.push("bugkisser.neocities.org");
    
    sites.push("galissia.neocities.org");
    
    sites.push("on3ko.lol");
    
    sites.push("dustbunnybedroom.neocities.org");
    
    sites.push("elevator-to-the-moon.neocities.org");
    
    sites.push("this-sucks.neocities.org");
    
    sites.push("the-star-lounge.neocities.org");
    
    sites.push("tasogarefujihana.neocities.org");
    
    sites.push("sneerful.neocities.org");
    
    sites.push("alchemillaotherworld.neocities.org");
    
    sites.push("sepulchredsacrament.neocities.org");
    
    sites.push("taciturnparadox.neocities.org");
    
    sites.push("snoopy-sauce.neocities.org");
    
    sites.push("ooops.lol");
    
    sites.push("tectrix.neocities.org");
    
    sites.push("radiolights.neocities.org");
    
    sites.push("cyberverse.neocities.org");
    
    sites.push("marsland.neocities.org");
    
    sites.push("baccyflap.neocities.org");
    
    sites.push("pastures.neocities.org");
    
    sites.push("rinautism.neocities.org");
    
    sites.push("raum.neocities.org");
    
    sites.push("agar.neocities.org");
    
    sites.push("jennahiveswap.neocities.org");
    
    sites.push("intestellars.neocities.org");
    
    sites.push("crtstatic.neocities.org");
    
    sites.push("spycicl.neocities.org");
    
    sites.push("melsic.neocities.org");
    
    sites.push("metallicscorner.neocities.org");
    
    sites.push("aspiration-failure.neocities.org");
    
    sites.push("v1v1sect1on.neocities.org");
    
    sites.push("whirlwind.neocities.org");
    
    sites.push("crankertainment.neocities.org");
    
    sites.push("astralily.neocities.org");
    
    sites.push("vulpecula.neocities.org");
    
    sites.push("hazure03.neocities.org");
    
    sites.push("crinelam.neocities.org");
    
    sites.push("opalunicorn.neocities.org");
    
    sites.push("angelhotspot.neocities.org");
    
    sites.push("zack-wack.neocities.org");
    
    sites.push("thievery.neocities.org");
    
    sites.push("spacefungus.neocities.org");
    
    sites.push("v4lent1ne.neocities.org");
    
    sites.push("captdedeyes.com");
    
    sites.push("tissue.neocities.org");
    
    sites.push("moya.neocities.org");
    
    sites.push("cocopie.neocities.org");
    
    sites.push("bonbon-ufo.neocities.org");
    
    sites.push("humansoda.neocities.org");
    
    sites.push("milk-tea.neocities.org");
    
    sites.push("kunfucutsman.neocities.org");
    
    sites.push("lurret.neocities.org");
    
    sites.push("azuremillennium.neocities.org");
    
    sites.push("blackflagluna.neocities.org");
    
    sites.push("qrql.neocities.org");
    
    sites.push("soulkuiro.neocities.org");
    
    sites.push("reiyua.neocities.org");
    
    sites.push("ibbofazblog.neocities.org");
    
    sites.push("xxstephsroomxx.neocities.org");
    
    sites.push("life-web.neocities.org");
    
    sites.push("starlitmarmalade.neocities.org");
    
    sites.push("kitnomaly.neocities.org");
    
    sites.push("unfunded.neocities.org");
    
    sites.push("jubilifevibes.neocities.org");
    
    sites.push("esteste2007.neocities.org");
    
    sites.push("beautifulsin.neocities.org");
    
    sites.push("pysgodyn3.neocities.org");
    
    sites.push("auroradynia.com");
    
    sites.push("strayland.neocities.org");
    
    sites.push("phaidros.neocities.org");
    
    sites.push("firefairy.neocities.org");
    
    sites.push("t-hates-you.neocities.org");
    
    sites.push("yutoyam.neocities.org");
    
    sites.push("rainydaydeer.neocities.org");
    
    sites.push("traversetown.neocities.org");
    
    sites.push("ourheroisasandwich.neocities.org");
    
    sites.push("rockseize.neocities.org");
    
    sites.push("jackcd.neocities.org");
    
    sites.push("staticpour.neocities.org");
    
    sites.push("nicholai.neocities.org");
    
    sites.push("tilde-os.neocities.org");
    
    sites.push("pixelverse47.neocities.org");
    
    sites.push("acidicalchemist.neocities.org");
    
    sites.push("bekianee.neocities.org");
    
    sites.push("toothspit.neocities.org");
    
    sites.push("beaniepines.neocities.org");
    
    sites.push("mothmothmothmoth.neocities.org");
    
    sites.push("zappu.neocities.org");
    
    sites.push("cazette.neocities.org");
    
    sites.push("bundbscity.neocities.org");
    
    sites.push("mrszenigata.neocities.org");
    
    sites.push("remnantmaru.neocities.org");
    
    sites.push("b1ttersw33t.neocities.org");
    
    sites.push("violetfyre.neocities.org");
    
    sites.push("exnihl.neocities.org");
    
    sites.push("freakysunshine.neocities.org");
    
    sites.push("pinkfiremage.neocities.org");
    
    sites.push("ultra-tetra.neocities.org");
    
    sites.push("morganacore.neocities.org");
    
    sites.push("fukounaglr.neocities.org");
    
    sites.push("m0ch1scorn3r.neocities.org");
    
    sites.push("introvertedloser.neocities.org");
    
    sites.push("smyrlok.neocities.org");
    
    sites.push("turtlethumbs.neocities.org");
    
    sites.push("meadowie.neocities.org");
    
    sites.push("killalocalpedophile.neocities.org");
    
    sites.push("starfactory.neocities.org");
    
    sites.push("dreamsofvinushka.neocities.org");
    
    sites.push("draggianuniverse.neocities.org");
    
    sites.push("dinpixels.neocities.org");
    
    sites.push("matytoonistarchive.neocities.org");
    
    sites.push("bloodbathspite.neocities.org");
    
    sites.push("ordainedmotion.neocities.org");
    
    sites.push("insqueeration.neocities.org");
    
    sites.push("chaoticalx.neocities.org");
    
    sites.push("rosydolly.neocities.org");
    
    sites.push("rybosome.neocities.org");
    
    sites.push("roxyandblackie.neocities.org");
    
    sites.push("lastroseofsummer.neocities.org");
    
    sites.push("xansnh.neocities.org");
    
    sites.push("nebulabeings.neocities.org");
    
    sites.push("minonii.neocities.org");
    
    sites.push("quadruplea.neocities.org");
    
    sites.push("karikinsun427.neocities.org");
    
    sites.push("drips.neocities.org");
    
    sites.push("telestripper.neocities.org");
    
    sites.push("glorpcore-radio.neocities.org");
    
    sites.push("johngriffin.neocities.org");
    
    sites.push("nolove.neocities.org");
    
    sites.push("harakiri.neocities.org");
    
    sites.push("busterbiggins.neocities.org");
    
    sites.push("audiux.neocities.org");
    
    sites.push("din0r4wr.neocities.org");
    
    sites.push("xxthemilkman69xx.neocities.org");
    
    sites.push("freshflesh.neocities.org");
    
    sites.push("onemoredoughnut.neocities.org");
    
    sites.push("lankarta-project.neocities.org");
    
    sites.push("url-here.neocities.org");
    
    sites.push("dynazenta.neocities.org");
    
    sites.push("penz.page");
    
    sites.push("thel3tterm.com");
    
    sites.push("natural-stupidity.neocities.org");
    
    sites.push("s1m0n3.neocities.org");
    
    sites.push("r3k.neocities.org");
    
    sites.push("jan-kapi.neocities.org");
    
    sites.push("chuckwagoneer.neocities.org");
    
    sites.push("it-art.neocities.org");
    
    sites.push("cappuccin0.neocities.org");
    
    sites.push("mirio.neocities.org");
    
    sites.push("pixeliana.neocities.org");
    
    sites.push("twitcheeer-home.neocities.org");
    
    sites.push("glyph555.neocities.org");
    
    sites.push("yoylecake420.neocities.org");
    
    sites.push("voidy.neocities.org");
    
    sites.push("lockheartlove.neocities.org");
    
    sites.push("mehlancholia.neocities.org");
    
    sites.push("thepersonyouwerebefore.neocities.org");
    
    sites.push("zombzgutzz.neocities.org");
    
    sites.push("snotrarchive.neocities.org");
    
    sites.push("sploinkys-tenders.neocities.org");
    
    sites.push("laserboy.neocities.org");
    
    sites.push("ulz.neocities.org");
    
    sites.push("racoons-nest.neocities.org");
    
    sites.push("kaiserpugdeutschland.neocities.org");
    
    sites.push("clothbanana.neocities.org");
    
    sites.push("deerwx.neocities.org");
    
    sites.push("iskra.neocities.org");
    
    sites.push("flowtyle.neocities.org");
    
    sites.push("mustardgrass.neocities.org");
    
    sites.push("ancientcrypt.tech");
    
    sites.push("snailburger.neocities.org");
    
    sites.push("filmsbyb.neocities.org");
    
    sites.push("blight.neocities.org");
    
    sites.push("shup.neocities.org");
    
    sites.push("milkpowderbun.com");
    
    sites.push("cybercalypso.neocities.org");
    
    sites.push("yammery.neocities.org");
    
    sites.push("starshifted.neocities.org");
    
    sites.push("connorthevgfan78.neocities.org");
    
    sites.push("wriorango.neocities.org");
    
    sites.push("zoranadragon.neocities.org");
    
    sites.push("toribytez.neocities.org");
    
    sites.push("nova.mkultra.monster");
    
    sites.push("kriminovoz.neocities.org");
    
    sites.push("underwhite.neocities.org");
    
    sites.push("shoals.neocities.org");
    
    sites.push("dert-cave.neocities.org");
    
    sites.push("musing.ispretty.fyi");
    
    sites.push("ssx.neocities.org");
    
    sites.push("windowsfan88888.neocities.org");
    
    sites.push("lakestheguy.neocities.org");
    
    sites.push("proxima-ch-2426.neocities.org");
    
    sites.push("mayonmnnaise.neocities.org");
    
    sites.push("wondermap.neocities.org");
    
    sites.push("bulltown.neocities.org");
    
    sites.push("ann-html.neocities.org");
    
    sites.push("bazookarat.neocities.org");
    
    sites.push("nondmo.online");
    
    sites.push("enderwebs.neocities.org");
    
    sites.push("necrodancing.neocities.org");
    
    sites.push("audioduck.neocities.org");
    
    sites.push("femtanyl03.neocities.org");
    
    sites.push("starbust-ent.com");
    
    sites.push("imbirowe.neocities.org");
    
    sites.push("viberi.neocities.org");
    
    sites.push("sillycar.neocities.org");
    
    sites.push("rhzartist.neocities.org");
    
    sites.push("wyrppad.neocities.org");
    
    sites.push("yuros-nest.neocities.org");
    
    sites.push("ichohneschnauzbart.neocities.org");
    
    sites.push("hollow-world-creek.neocities.org");
    
    sites.push("nilistisk.neocities.org");
    
    sites.push("hammerheader.neocities.org");
    
    sites.push("alienspaceinvader.neocities.org");
    
    sites.push("sleepycircus.neocities.org");
    
    sites.push("overmore.neocities.org");
    
    sites.push("aeronn.neocities.org");
    
    sites.push("kimsdigitaltreasurebox.neocities.org");
    
    sites.push("lizzzys-cave.neocities.org");
    
    sites.push("fennelstars-wonderland.neocities.org");
    
    sites.push("argonptg.neocities.org");
    
    sites.push("fernwaves.neocities.org");
    
    sites.push("cosmic-calamari.neocities.org");
    
    sites.push("billerville.neocities.org");
    
    sites.push("leemon.neocities.org");
    
    sites.push("moopuries.neocities.org");
    
    sites.push("darkmomokocore.neocities.org");
    
    sites.push("ghostz.neocities.org");
    
    sites.push("sweet-pea.neocities.org");
    
    sites.push("tefrian.neocities.org");
    
    sites.push("sprigplumbee.neocities.org");
    
    sites.push("madjuice.neocities.org");
    
    sites.push("slushienova.neocities.org");
    
    sites.push("candlelightblog.neocities.org");
    
    sites.push("queenofvenus.neocities.org");
    
    sites.push("huroncelestial.neocities.org");
    
    sites.push("moosen.neocities.org");
    
    sites.push("electro-magnets.neocities.org");
    
    sites.push("bittersweetness.neocities.org");
    
    sites.push("mustikas.neocities.org");
    
    sites.push("didelphidae.neocities.org");
    
    sites.push("sachertorte.neocities.org");
    
    sites.push("janh109.neocities.org");
    
    sites.push("ihatetehbsod.neocities.org");
    
    sites.push("deanstab.neocities.org");
    
    sites.push("chanteryuutai.neocities.org");
    
    sites.push("mewchara.neocities.org");
    
    sites.push("star-specimen.neocities.org");
    
    sites.push("unilover.neocities.org");
    
    sites.push("cntrlprocess.neocities.org");
    
    sites.push("fimvie.neocities.org");
    
    sites.push("abode-bound.neocities.org");
    
    sites.push("summer-slushpups-hut.neocities.org");
    
    sites.push("thelongesttextever.neocities.org");
    
    sites.push("yammers1.neocities.org");
    
    sites.push("thoushallkill.neocities.org");
    
    sites.push("willascool.neocities.org");
    
    sites.push("kerchunkle.neocities.org");
    
    sites.push("portfoliodelili.neocities.org");
    
    sites.push("internetidol.neocities.org");
    
    sites.push("effervescent.neocities.org");
    
    sites.push("seventy7.neocities.org");
    
    sites.push("bishoujopalace.neocities.org");
    
    sites.push("chimerathing.neocities.org");
    
    sites.push("pablitosexobar.neocities.org");
    
    sites.push("fraeddic.neocities.org");
    
    sites.push("bliptro.neocities.org");
    
    sites.push("kweenbimbowoof.neocities.org");
    
    sites.push("aliceinavocadoland.neocities.org");
    
    sites.push("mysterious-pigeon-society.neocities.org");
    
    sites.push("bunnyboyblog.neocities.org");
    
    sites.push("oldgoldacy.neocities.org");
    
    sites.push("lunaslibrary.neocities.org");
    
    sites.push("mydearagatka.neocities.org");
    
    sites.push("xsolimini.fr");
    
    sites.push("wallace-online.neocities.org");
    
    sites.push("main-halibutgames.neocities.org");
    
    sites.push("nlolnlolnlo.neocities.org");
    
    sites.push("cynicalsheep.neocities.org");
    
    sites.push("crusades.neocities.org");
    
    sites.push("dagurthehorrible.neocities.org");
    
    sites.push("blueiris080906.neocities.org");
    
    sites.push("nixxx420.neocities.org");
    
    sites.push("lucysdying.neocities.org");
    
    sites.push("uraincandy.neocities.org");
    
    sites.push("voidgazing.neocities.org");
    
    sites.push("glow-bugs.neocities.org");
    
    sites.push("asmodeusvulcan.neocities.org");
    
    sites.push("mintgreen.neocities.org");
    
    sites.push("iskotaa.neocities.org");
    
    sites.push("mrblizzard.neocities.org");
    
    sites.push("pancontinental.neocities.org");
    
    var thisSite = -1;
    for(var i = 0, n = sites.length; i < n; i++){
        if(location.host.indexOf(sites[i]) != -1){
            thisSite = i;
        }
    }
    /* draw widget after script tag when DOM is available */
    document.addEventListener('DOMContentLoaded', function(scriptTag, prevSite, nextSite) {
        var prevLink = createImgLink('https://' + prevSite, prevLinkImage, 'Prev');
        var ringLink = createImgLink('https://nuthead.neocities.org/ring/', logoLinkImage, 'Nullring');
        var nextLink = createImgLink('https://' + nextSite, nextLinkImage, 'Next');

        var container = scriptTag.parentNode;
        var ref = scriptTag.nextSibling;
        container.insertBefore(prevLink, ref);
        container.insertBefore(ringLink, ref);
        container.insertBefore(nextLink, ref);
    }.bind(null, document.currentScript, sites[thisSite < 1 ? sites.length - 1 : thisSite - 1], sites[thisSite >= sites.length - 1 ? 0 : thisSite + 1]));
})();