const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//회원 정보 수정
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updateUser = await User.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                {
                    new: true,
                },
            );
            res.status(200).json(updateUser);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(401).json("당신의 계정만 수정하십시오.");
    }
});

//회원 정보 삭제
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            try {
                // await Post.deleteMany({ username: user.username });
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("회원 정보가 삭제되었습니다.");
            } catch (err) {
                res.status(500).json(err);
            }
        } catch (err) {
            res.status(404).json("회원 정보가 없습니다.");
        }
    } else {
        res.status(401).json("당신의 계정만 삭제할 수 있다.");
    }
});

//회원 정보 가져오기
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
