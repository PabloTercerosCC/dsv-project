import Task from "../models/task";
import fs from "fs-extra";
import path from "path";

export const createTask = async (req, res) => {
    try {
        const { title } = req.body;
        const task = new Task({
            title,
            user: req.userId,
        });
        await task.save();
        res.status(200).json({
            message: "Task saved successfully",
            task: task,
        });
    } catch (error) {
        res.status(500).json({
            message: "An error has occurred",
            error,
        });
    }
};

export const readTask = async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Task.findById(id);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({
            message: "An error has occurred",
            error,
        });
    }
};

export const updateTask = async (req, res) => {
    try {
        const id = req.params.id,
        { name: title} = req.body;
        if (req.file) {
            const updatedTask = await Task.findByIdAndUpdate(
                id,
                { title: title},
                { new: true }
            );
            res.status(200).json({
            message: "Task updated successfully",
            updatedTask: updatedTask,
            });
        } else {
            const updatedTask = await Task.findByIdAndUpdate(
                id,
                { title: title},
                { new: true }
            );
            res.status(200).json({
                message: "Task updated successfully",
                updatedProduct: updatedTask,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "An error has occurred",
            error,
        });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedTask = await Task.findByIdAndDelete(id);
        if (deleteTask) {
            await fs.unlink(path.resolve(deletedTask.image));
        }
        res.status(200).json({
            message: "Task deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: "An error has occurred",
            error,
        });
    }
};

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({user: req.userId}).sort("title");
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({
            message: "An error has occurred",
            error,
        });
    }
}
