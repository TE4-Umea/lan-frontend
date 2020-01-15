<template>
	<textarea class="form-control input" rows="24" v-model="rules"> </textarea>
</template>

<script>
export default {
	data() {
		return {
      rules: `# Regler:
1. Alkohol* och Droger* är EJ tillåtet.
2. Mat och dryck förekommer vid datorer på eget ansvar.**
3. Ingen rökning av något slag inomhus.
4. Sovsal: Arkimedes, Trygg sovsal: Sokrates
5. Duscha INNAN lanet, så det inte luktar skunk under lanet.

*Förekommer något av detta så kommer ett samtal till “114 14” inträffa.
**Går något sönder så står den orsakande personen för skadan.

# Packning:
1. Nätverkskabel (rekommenderat 5-10 meter), finns tillgång att köpa en nätverkskabel i närheten av skolan.
2. Dator eller konsol.
3. Skärm.
4. Grenuttag.
5. Något att sova på/i.
6. Hygien (Tandborste, osv.)
7. Mat.

# Ansvar för städ:
Under detta  LAN kommer vi i crew att utse en ansvarig person i varje klassrum. Denna person ansvarar för att **alla** i klassrummet under **hela** lanet. En bild kommer skrivas ut och sättas på dörren framför rummet, det är den ansvarige i klassrummet som **ska** se till att klassrummet ser likadant ut på söndagen.


Om klassrummet inte städas kommer den ansvarige få stanna kvar tillsammans med lancrew efter lanets stängning för att städa klassrummet. **Ifall den ansvarige lämnar lanet före rummet städats kommer denne att svartlistas från kommande lan.** `
    }
	}
}
</script>

<style lang="scss" scoped>
// textarea {
//   width: 100%;
//   height: 75%;
// }
.input  {
  box-sizing:border-box;
}
</style>
