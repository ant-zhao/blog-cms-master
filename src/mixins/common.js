
const CommonMixins = {
    computed: {
        $uploadUrl() {
            return `/api/upFiles`
        },
        $uploadMp3Url() {
            return `/api/upFilesMP3`
        }

    }
}


export default CommonMixins