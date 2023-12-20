const Donation = require("../models/Donation");


const getDonation = async (requset, response) => {
    try {
        const donation = await Donation.findAll();
        response.status(200).json({ donation:donation });
    } catch (error) {
        response.status(500).json({ msg: "error on getting Donation" });
    }
};
//get one donation
const getOneDonation = async (req, res) => {
    const id = req.params.id;
    try {
        const foundDonation = await Donation.findByPk(id);
        if (foundDonation) {
            res.status(200).json({ donation:foundDonation });
        } else {
            res.status(404).json({ msg: "Donation not found" });
        }
    } catch (error) {
        console.error("Error on getting one donation:", error);
        res
            .status(500)
            .json({ msg: "Error on getting one doantion", error: error.message });
    }
};
//post one donation
const postDonation = async (request, response) => {
    try {
        const newDonation = request.body;
        /*try{ 
            const donation = await Donation.findOne({ where: { id: newDonation.id } });
            if (donation) {
                return response.status(400).json({ msg: "donation already exists" });
            }
        }catch(e){
            console.log(e);
            response.status(400).json({msg:"schema not valid"})
        }*/
        const createdDonation = await Donation.create(newDonation);
        response.status(200).json({ donation: createdDonation, msg: " Donation added successfully" });
    } catch (error) {
        console.error("Error on adding donation: ", error);
        response
            .status(500)
            .json({ msg: "Error on adding donation: ", error: error.message });
    }
};
//update one donation
const putDonation = async (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    try {
        const [updateCount] = await Donation.update(updatedData, {
            where: { id: id },
        });
        if (updateCount > 0) {
            res.status(200).json({ msg: "Donation updated successfully" });
        } else {
            res.status(404).json({ msg: "DOnation not found" });
        }
    } catch (error) {
        res
            .status(500)
            .json({ msg: "Error on updating Donation", error: error.message });
    }
};
const deleteDonation = async (req, res) => {
    const id = req.params.id;
    try {
        const deleteCount = await Donation.destroy({
            where: { id: id },
        });
        if (deleteCount > 0) {
            res.status(200).json({ msg: "Donation deleted successfully" });
        } else {
            res.status(404).json({ msg: "Donation not found" });
        }
    } catch (error) {
        console.error("Error on deleting Donation:", error);
        res
            .status(500)
            .json({ msg: "Error on deleting donation", error: error.message });
    }
};
module.exports = { postDonation, getDonation, getOneDonation, putDonation, deleteDonation };
