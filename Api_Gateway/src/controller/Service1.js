const Getdata = async (req, res) => {
    res.status(200).json('berhasil melewati midleware');
}

export default {
    Getdata,
}