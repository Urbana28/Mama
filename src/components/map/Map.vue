<template>
    <div class="map">
        <GmapMap
                :center="this.center"
                :zoom="13"
                map-type-id="terrain"
                style="width: 100%; height: 100%"
        >
            <GmapInfoWindow
                    :options="infoOptions"
                    :position="infoPosition"
                    :opened="infoOpened"
                    @closeclick="closeInfo()">

            </GmapInfoWindow>
            <GmapMarker
                    :key="index"
                    v-for="(m, index) in MARKERS"
                    :position="m.point"
                    :clickable="true"
                    :draggable="true"
                    @click="setInfo(m)"

            />
        </GmapMap>
    </div>
</template>

<script>
    import GmapCustomMarker from 'vue2-gmap-custom-marker';
    import {mapGetters} from "vuex";

    export default {
        name: 'Map',
        components: {'gmap-custom-marker': GmapCustomMarker},
        methods: {
            setInfo (m, index) {
                this.infoPosition = m.point

                if (this.infoCurrentKey === index) {
                    this.infoOpened = !this.infoOpened;
                }
                //if different marker set infowindow to open and reset current marker index
                else {
                    this.infoOpened = true;
                    this.infoCurrentKey = index;
                }
            },

            closeInfo () {
                this.infoOpened = false
                this.infoPosition = null
                this.infoCurrentKey = null
            }
        },

        data() {
            return {
                center: {lat: 34.052235, lng: -118.243683},
                markerOptions: {
                    url: 'https://image.flaticon.com/icons/svg/3013/3013926.svg',
                    size: {width: 60, height: 90, f: 'px', b: 'px',},
                    scaledSize: {width: 30, height: 45, f: 'px', b: 'px',},
                },

                infoPosition: null,
                infoContent: 'HI How are you',
                infoOpened: false,
                infoCurrentKey: null,
                infoOptions: {
                    pixelOffset: {
                        width: 0,
                        height: -35
                    },
                    content: 'Test bla bla bla bla bla bla'
                }
            }
        },
        computed : {
            ...mapGetters('restaurantsModule', ['MARKERS']),
        }
    }
</script>

<style scoped lang="scss">
    .map {
        width: 100%;
        height: 100%;
    }
</style>