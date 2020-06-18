<template>
    <div class="map">
        <GmapMap
                :center="this.center"
                :zoom="7"
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
                    v-for="(m, index) in this.markers"
                    :position="m.position"
                    :clickable="true"
                    :draggable="true"
                    @click="setInfo(m)"

            />
        </GmapMap>
    </div>
</template>

<script>
    import GmapCustomMarker from 'vue2-gmap-custom-marker';

    export default {
        name: 'Map',
        components: {'gmap-custom-marker': GmapCustomMarker},
        methods: {
            setInfo (m, index) {
                this.infoPosition = m.position

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
                markers: [
                    {
                        position: {lat: 34.055235, lng: -118.243684}
                    },
                    {
                        position: {lat: 10.0, lng: 10.0}
                    }
                ],
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
                    content: 'Test'
                }
            }
        }
    }
</script>

<style scoped lang="scss">
</style>